import { Injectable } from '@nestjs/common';
import { TenantConnectionService } from 'src/database/tenant-connection.service';
import { Client } from '../domain/entities/client';
import { IClientRepository } from './client.repository.interface';
import { toDomain, toPersistence } from '../application/mappers/client.mapper';
import { ClientOrmEntity } from '../domain/entities/client.entity';
import { UserEntity } from '../domain/entities/user.entity';

@Injectable()
export class ClientRepository implements IClientRepository {
  constructor(private readonly tenantService: TenantConnectionService) {}

  // Método privado para obtener el repositorio de TypeORM usando el esquema dinámico.
  // Esto permite trabajar con múltiples esquemas en PostgreSQL.
  private async getRepo() {
    const dataSource = await this.tenantService.getDataSource();
    return dataSource.getRepository(ClientOrmEntity);
  }

  async getAll(): Promise<Client[]> {
    const repo = await this.getRepo();
    const entities = await repo.find({
      relations: ['commerce', 'country', 'documentType'],
    });
    return entities.map(toDomain);
  }

  async getById(id: string): Promise<Client | null> {
    const repo = await this.getRepo();
    const entity = await repo.findOne({
      where: { client_id: id },
      relations: ['commerce', 'country', 'documentType'],
    });
    return entity ? toDomain(entity) : null;
  }


  
  async findUserNameByEmail(email: string): Promise<string | null> {
    const dataSource = await this.tenantService.getDataSource();
    const repo = dataSource.getRepository(UserEntity);

    const user = await repo.findOne({ where: { email } });
    return user ? user.name : null;
  }



  async save(client: Client): Promise<void> {
    const repo = await this.getRepo();
    const entity = toPersistence(client);
    await repo.save(entity);
  }

  async update(id: string, client: Client): Promise<void> {
    const repo = await this.getRepo();
    const entity = toPersistence(client);
    await repo.update({ client_id: id }, entity);
  }

  async delete(id: string): Promise<void> {
    const repo = await this.getRepo();
    await repo.delete({ client_id: id });
  }
}
