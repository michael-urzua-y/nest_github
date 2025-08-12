import { Injectable, Scope, NotFoundException } from '@nestjs/common';
import { SchemaContextService } from 'src/schema/schema.service';
import { DataSource } from 'typeorm';
import { DataSourceOptions } from 'typeorm/browser';

const dataSourceCache: Map<string, DataSource> = new Map();

@Injectable({ scope: Scope.REQUEST })
export class TenantConnectionService {
  constructor(private readonly schemaContext: SchemaContextService) { }

  async getDataSource(): Promise<DataSource> {

    const schema = this.schemaContext.getSchemaName();

    if (dataSourceCache.has(schema)) {
      return dataSourceCache.get(schema)!;
    }

    const exists = await this.schemaExists(schema);
    if (!exists) {
      throw new NotFoundException(`Schema '${schema}' does not exist`);
    }

    const dataSource = new DataSource(getBaseDataSourceConfig(schema));

    await dataSource.initialize();
    dataSourceCache.set(schema, dataSource);

    return dataSource

  }

  private async schemaExists(schema: string): Promise<boolean> {
    const tempDataSource = new DataSource(getBaseDataSourceConfig('public'));
    try {
      await tempDataSource.initialize();
      const result = await tempDataSource.query(
        `SELECT schema_name FROM information_schema.schemata WHERE schema_name = $1`,
        [schema]
      );

      return result.length > 0;
    } catch (err) {
      console.error('Error checking schema existence:', err);
      return false;
    } finally {
      await tempDataSource.destroy();
    }
  }
}


function getBaseDataSourceConfig(schema: string): DataSourceOptions {
  return {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT!,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    schema,
    synchronize: false,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'], 
  };
}
