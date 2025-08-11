import { Injectable,Inject } from '@nestjs/common';
import { Commerce } from '../domain/entities/commerce.entity';
import type { ICommerceRepository } from '../persistance/commerce.repository.interface';
import { CreateCommerceDto } from '../domain/dto/create-commerce.dto';
import { UpdateCommerceDto } from '../domain/dto/update-commerce.dto';

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

  async createCommerce(dto: CreateCommerceDto): Promise<Commerce> {
    return this.commerceRepo.create(dto);
  }

  async updateCommerce(id: string, dto: UpdateCommerceDto): Promise<Commerce> {
    return this.commerceRepo.update(id, dto);
  }

  async deleteCommerce(id: string): Promise<void> {
    return this.commerceRepo.delete(id);
  }
}
