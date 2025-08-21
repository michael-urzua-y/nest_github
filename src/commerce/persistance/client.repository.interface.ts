import { Client } from '../domain/entities/client';

export interface IClientRepository {
  getAll(): Promise<Client[]>;
  getById(id: string): Promise<Client | null>;
  save(client: Client): Promise<void>;
  update(id: string, client: Client): Promise<void>;
  delete(id: string): Promise<void>;
}
