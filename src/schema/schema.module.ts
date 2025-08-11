// src/schema/schema.module.ts
import { Module } from '@nestjs/common';
import { SchemaContextService } from './schema.service';

@Module({
  providers: [SchemaContextService],
  exports: [SchemaContextService],
})
export class SchemaModule {}
