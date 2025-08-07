import { Injectable, Inject } from "@nestjs/common";
import { Payin } from '../domain/entities/payin.entity'
import type { IPayinRepository } from '../persistence/payin.repository.interface';

@Injectable()
export class PayinService {
  constructor(
    @Inject('IUserRepository')
    private readonly payinRepo: IPayinRepository,
  ) {}

  async getUsers(): Promise<Payin[]> {
    return this.payinRepo.findAll();
  }

}
