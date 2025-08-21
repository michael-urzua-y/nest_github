import { Injectable, Scope, NotFoundException, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { SchemaContextService } from 'src/schema/schema.service';
import { DataSource } from 'typeorm';
import { DataSourceOptions } from 'typeorm/browser';

const dataSourceCache: Map<string, DataSource> = new Map();

@Injectable({ scope: Scope.REQUEST })
export class TenantConnectionService {
  private schema: string;

  constructor(@Inject(REQUEST) private readonly request: Request) {
    this.schema = (this.request as any).schemaName;
  }

  getSchema(): string {
    return this.schema;
  }

  async getDataSource(): Promise<DataSource> {
    if (dataSourceCache.has(this.schema)) {
      return dataSourceCache.get(this.schema)!;
    }

    const exists = await this.schemaExists();

    if (!exists) {
      throw new NotFoundException(`Schema '${this.schema}' does not exist`);
    }

    const dataSource = new DataSource(getBaseDataSourceConfig(this.schema));
    await dataSource.initialize();
    dataSourceCache.set(this.schema, dataSource);
    return dataSource;
  }

  private async schemaExists(): Promise<boolean> {
    const tempDataSource = new DataSource(getBaseDataSourceConfig('public'));
    try {
      await tempDataSource.initialize();
      const result = await tempDataSource.query(
        `SELECT schema_name FROM information_schema.schemata WHERE schema_name = $1`,
        [this.schema]
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
    schema: schema,
    synchronize: false,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  };
}
