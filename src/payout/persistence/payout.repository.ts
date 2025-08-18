import { Injectable } from '@nestjs/common';
import { TenantConnectionService } from 'src/database/tenant-connection.service';
// import { Payout } from '../domain/entities/payout.entity';
import { IPayoutRepository } from './payout.repository.interface';
import { Repository } from 'typeorm';

// @Injectable()
// export class PayoutRepository implements IPayoutRepository {
//   constructor(private readonly tenantService: TenantConnectionService) {}

//   private async getRepo(): Promise<Repository<Payout>> {
//     const dataSource = await this.tenantService.getDataSource();
//     return dataSource.getRepository(Payout);
//   }

//   async findAll(): Promise<Payout[]> {
//     const repo = await this.getRepo();
//     return repo.find();
//   }

//   async findById(id: string): Promise<Payout | null> {
//     const repo = await this.getRepo();
//     return repo.findOne({ where: { user_id: id } });
//   }

// }
