import { Module } from '@nestjs/common';
import { PayinController } from './presentation/payin.controller';
import { PayinService } from './application/payin.service';
import { PayinRepository } from './persistence/payin.repository';
import { TenantConnectionService } from 'src/database/tenant-connection.service';

@Module({
  controllers: [PayinController],
  providers: [
    PayinService,
    PayinRepository,
    TenantConnectionService,
  ],
})
export class PayinModule {}
