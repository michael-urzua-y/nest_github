import { Injectable } from '@nestjs/common';
import { TenantConnectionService } from 'src/database/tenant-connection.service';
// import { Commerce } from '../domain/entities/Commerce.entity';
import { Commerce } from '../domain/entities/commerce.entity';
import { ICommerceRepository } from './commerce.repository.interface';
import { Repository } from 'typeorm';

@Injectable()
export class CommerceRepository implements ICommerceRepository {
  constructor(private readonly tenantService: TenantConnectionService) { }

  private async getRepo(): Promise<Repository<Commerce>> {
    const dataSource = await this.tenantService.getDataSource();
    return dataSource.getRepository(Commerce);
  }

  async findAll(): Promise<Commerce[]> {
    const repo = await this.getRepo();
    return repo.find();
  }

  async findByRut(id: string): Promise<Commerce | null> {
    const repo = await this.getRepo();
    return repo.findOne({ where: { commerce_id: id } });
  }


  async findById(id: string): Promise<Commerce | null> {
    const repo = await this.getRepo();
    return repo.findOne({ where: { commerce_id: id } });
  }

  async create(user: Partial<Commerce>): Promise<Commerce> {
    const repo = await this.getRepo();
    const newUser = repo.create(user);
    return repo.save(newUser);
  }

  async update(id: string, user: Partial<Commerce>): Promise<Commerce> {
    const repo = await this.getRepo();
    await repo.update(id, user);

    const updatedUser = await repo.findOne({ where: { commerce_id: id } });
    if (!updatedUser) {
      throw new Error(`User with ID ${id} not found after update`);
    }

    return updatedUser;
  }

  async delete(id: string): Promise<void> {
    const repo = await this.getRepo();
    await repo.delete(id);
  }
}
