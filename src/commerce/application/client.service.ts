import { Injectable, Inject } from '@nestjs/common';
import { Client } from '../domain/entities/client.entity';
import type { IClientRepository } from '../persistance/client.repository.interface';

@Injectable()
export class ClientService {
  constructor(
    @Inject('IClientRepository')
    private readonly cliRepo: IClientRepository,
  ) {}

  getAllClients(): Promise<Client[]> {
    return this.cliRepo.getAll();
  }

  getClientById(id: string): Promise<Client | null> {
    return this.cliRepo.getById(id);
  }
}
