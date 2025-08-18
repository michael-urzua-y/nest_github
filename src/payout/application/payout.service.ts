import { Injectable, Inject } from '@nestjs/common';
import type { IPayoutRepository } from '../persistence/payout.repository.interface';
import { CreatePayoutDto } from '../domain/dto/create-payout.dto';
import { UpdatePayoutDto } from '../domain/dto/update-payout.dto';

@Injectable()
export class PayoutService {
  constructor(
    @Inject('IUserRepository')
    private readonly payoutRepo: IPayoutRepository,
  ) {}

  // async getUsers(): Promise<Payout[]> {
  //   return this.userRepo.findAll();
  // }

  // async getUserById(id: string): Promise<Payout | null> {
  //   return this.userRepo.findById(id);
  // }

}
