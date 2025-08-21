import { Injectable } from '@nestjs/common';
import { TenantConnectionService } from 'src/database/tenant-connection.service';
import { PayinDetailedViewEntity } from '../domain/entities/payin_detailed_view.entity';

@Injectable()
export class PayinRepository {
  constructor(private readonly tenantService: TenantConnectionService) {}

  async findAllPayins(): Promise<PayinDetailedViewEntity[]> {
    const dataSource = await this.tenantService.getDataSource();
    const schema = this.tenantService.getSchema();
    console.log({schema})
    const rawResults = await dataSource.query(
      `SELECT * FROM ${schema}.payin_detailed_view`
    );

    return rawResults;
  }
}
