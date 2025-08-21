import { Injectable } from '@nestjs/common';
import { PayinRepository } from '../persistence/payin.repository';
import { PayinDetailedViewEntity } from '../domain/entities/payin_detailed_view.entity';

@Injectable()
export class PayinService {
  constructor(private readonly payinRepository: PayinRepository) {}

  async getAllPayins(): Promise<PayinDetailedViewEntity[]> {
    return this.payinRepository.findAllPayins();
  }
}
