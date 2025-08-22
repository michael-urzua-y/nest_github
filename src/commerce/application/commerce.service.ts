import { Injectable,Inject } from '@nestjs/common';
import { Commerce } from '../domain/entities/commerce.entity';
import type { ICommerceRepository } from '../persistance/commerce.repository.interface';


@Injectable()
export class CommerceService {
  constructor(
    @Inject('ICommerceRepository')
    private readonly commerceRepo: ICommerceRepository,
  ) {}

  async getCommerces(): Promise<Commerce[]> {
    return this.commerceRepo.findAll();
  }

  async getCommerceById(id: string): Promise<Commerce | null> {
    return this.commerceRepo.findById(id);
  }

}
