import { Module } from '@nestjs/common';
import { MigrationController } from './migration.controller';
import { MigrationService } from './migration.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule], 
  controllers: [MigrationController],
  providers: [MigrationService],
})
export class MigrationModule {}
