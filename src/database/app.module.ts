

import { Module } from '@nestjs/common';
import { TenantConnectionService } from './tenant-connection.service';
import { SchemaModule } from 'src/schema/schema.module';

@Module({
  providers: [TenantConnectionService],
  exports: [TenantConnectionService],
  imports:[SchemaModule]
})
export class DatabaseModule {}
