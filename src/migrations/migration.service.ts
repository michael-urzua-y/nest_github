import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class MigrationService {
  constructor(private readonly dataSource: DataSource) {}

  async migrateAllTenants() {
    const tenants = await this.getAllSchemas();

    for (const schema of tenants) {
      console.log(`Migrando schema: ${schema}`);

      const tenantDataSource = new DataSource({
        ...this.dataSource.options,
        name: `connection_${schema}`,
      });

      await tenantDataSource.initialize();
      await tenantDataSource.runMigrations();
      await tenantDataSource.destroy();
    }
  }

  private async getAllSchemas(): Promise<string[]> {
    const result = await this.dataSource.query(`
      SELECT schema_name 
      FROM information_schema.schemata
      WHERE schema_name NOT IN (
        'public', 'information_schema', 'pg_catalog'
      )
    `);

    return result.map((row: any) => row.schema_name);
  }
}
