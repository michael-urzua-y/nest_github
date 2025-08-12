import { Injectable } from '@nestjs/common';
import { TenantConnectionService } from 'src/database/tenant-connection.service';
import { User } from '../domain/entities/user.entity';
import { IUserRepository } from './user.repository.interface';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly tenantService: TenantConnectionService) {}
  // Inyecta el servicio que proporciona la conexión a la base de datos según el esquema actual.


// Obtiene el repositorio de la entidad User para el esquema actual
  private async getRepo(): Promise<Repository<User>> {
    const dataSource = await this.tenantService.getDataSource();
    return dataSource.getRepository(User);
  }

  async findAll(): Promise<User[]> {
    const repo = await this.getRepo();
    return repo.find();
  }

  async findById(id: string): Promise<User | null> {
    const repo = await this.getRepo();
    return repo.findOne({ where: { user_id: id } });
  }

  async create(user: Partial<User>): Promise<User> {
    const repo = await this.getRepo();
    const newUser = repo.create(user);
    return repo.save(newUser);
  }

  async update(id: string, user: Partial<User>): Promise<User> {
    const repo = await this.getRepo();
    await repo.update(id, user);
    const updatedUser = await repo.findOne({ where: { user_id: id } });
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
