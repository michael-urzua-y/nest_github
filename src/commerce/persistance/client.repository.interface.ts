import { Client } from '../domain/entities/client.entity';

export interface IClientRepository {
  getAll(): Promise<Client[]>;
  getById(id: string): Promise<Client | null>;
}
