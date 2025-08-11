import { Commerce } from '../domain/entities/commerce.entity';

export interface ICommerceRepository {
  findAll(): Promise<Commerce[]>;
  findById(id: string): Promise<Commerce | null>;
  create(user: Partial<Commerce>): Promise<Commerce>;
  update(id: string, user: Partial<Commerce>): Promise<Commerce>;
  delete(id: string): Promise<void>;
}

