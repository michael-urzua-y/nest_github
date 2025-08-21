import { Controller, Get, Post } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { SEED_TENANTS } from './seed-schemas';

@Controller('seed')
export class SeedController {
  constructor(private readonly dataSource: DataSource) {}

  @Post()
  async seedSchemas() {
    const created: string[] = [];
    const skipped: string[] = [];

    for (const tenantName of SEED_TENANTS) {
      const schemaName = this.slugify(tenantName);

      if (await this.schemaExists(schemaName)) {
        skipped.push(schemaName);
        continue;
      }

      await this.dataSource.query(`CREATE SCHEMA "${schemaName}"`);
      created.push(schemaName);
    }

    return {
      createdCount: created.length,
      skippedCount: skipped.length,
      created,
      skipped
    };
  }

  private async schemaExists(schema: string): Promise<boolean> {
    const result = await this.dataSource.query(
      `SELECT schema_name FROM information_schema.schemata WHERE schema_name = $1`,
      [schema]
    );
    return result.length > 0;
  }

  private slugify(name: string): string {
    return name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '_')
      .replace(/[^\w_]/g, '');
  }
}
