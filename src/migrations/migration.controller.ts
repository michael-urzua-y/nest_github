import { Controller, Post } from "@nestjs/common";
import { MigrationService } from "./migration.service";

@Controller('migrate')
export class MigrationController {
  constructor(private readonly migrationService: MigrationService) {}

  @Post()
  async migrateAll() {
    await this.migrationService.migrateAllTenants();
    console.log('web')

    return { message: 'Migraciones completadas en todos los schemas' };
  }
}
