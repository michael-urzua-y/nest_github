import { Injectable, Scope, NotFoundException } from '@nestjs/common';
import { SchemaContextService } from 'src/schema/schema.service';
import { DataSource } from 'typeorm';
import { DataSourceOptions } from 'typeorm/browser';

// Cache en memoria para almacenar conexiones por esquema
const dataSourceCache: Map<string, DataSource> = new Map();

@Injectable({ scope: Scope.REQUEST })
export class TenantConnectionService {
  // Inyectamos el servicio que proporciona el nombre del esquema actual
  constructor(private readonly schemaContext: SchemaContextService) { }

  // Método principal para obtener la conexión a la base de datos del esquema actual
  async getDataSource(): Promise<DataSource> {
    // Obtenemos el nombre del esquema desde el contexto
    const schema = this.schemaContext.getSchemaName();

    // Si ya existe una conexión para este esquema en el cache, la retornamos
    if (dataSourceCache.has(schema)) {
      return dataSourceCache.get(schema)!;
    }

    // Verificamos si el esquema existe en la base de datos
    const exists = await this.schemaExists(schema);
    if (!exists) {
      // Si no existe, lanzamos una excepción 404
      throw new NotFoundException(`Schema '${schema}' does not exist`);
    }

    // Creamos una nueva conexión con la configuración del esquema
    const dataSource = new DataSource(getBaseDataSourceConfig(schema));

    // Inicializamos la conexión
    await dataSource.initialize();

    // Guardamos la conexión en el cache
    dataSourceCache.set(schema, dataSource);

    // Retornamos la conexión lista para usar
    return dataSource;
  }

  // Método privado para verificar si un esquema existe en la base de datos
  private async schemaExists(schema: string): Promise<boolean> {
    // Creamos una conexión temporal al esquema 'public'
    const tempDataSource = new DataSource(getBaseDataSourceConfig('public'));
    try {
      // Inicializamos la conexión temporal
      await tempDataSource.initialize();

      // Ejecutamos una consulta para verificar si el esquema existe
      const result = await tempDataSource.query(
        `SELECT schema_name FROM information_schema.schemata WHERE schema_name = $1`,
        [schema]
      );

      // Retornamos true si se encontró el esquema
      return result.length > 0;
    } catch (err) {
      // En caso de error, lo mostramos en consola y retornamos false
      console.error('Error checking schema existence:', err);
      return false;
    } finally {
      // Cerramos la conexión temporal
      await tempDataSource.destroy();
    }
  }
}

// Función auxiliar que retorna la configuración base para conectar a un esquema específico
function getBaseDataSourceConfig(schema: string): DataSourceOptions {
  return {
    type: 'postgres', // Tipo de base de datos
    host: process.env.DB_HOST, // Host de la base de datos
    port: +process.env.DB_PORT!, // Puerto de conexión
    username: process.env.DB_USERNAME, // Usuario
    password: process.env.DB_PASSWORD, // Contraseña
    database: process.env.DB_NAME, // Nombre de la base de datos
    schema, // Esquema al que se desea conectar
    synchronize: false, // No sincronizar automáticamente
    entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Ruta de las entidades
  };
}
