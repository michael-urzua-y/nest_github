import { Payin } from '../entities/payin.entity';

export interface IPayinRepository {
  findAll(): Promise<Payin[]>;
}

