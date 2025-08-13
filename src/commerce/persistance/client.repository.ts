import { Injectable } from '@nestjs/common';
import { TenantConnectionService } from 'src/database/tenant-connection.service';
import { Repository } from 'typeorm';
import { Client } from '../domain/entities/client.entity';
import { IClientRepository } from './client.repository.interface';

@Injectable()
export class ClientRepository implements IClientRepository {
  constructor(private readonly tenantService: TenantConnectionService) {}
  
    private async getRepo(): Promise<Repository<Client>> {
      const dataSource = await this.tenantService.getDataSource();
      return dataSource.getRepository(Client);
    }
  
    async getAll(): Promise<Client[]> {
      const repo = await this.getRepo();
      return repo.find();
    }
    async getById(id: string): Promise<Client | null> {
        const repo = await this.getRepo();
        return repo.findOne({ where: { client_id: id } });
      }
}
