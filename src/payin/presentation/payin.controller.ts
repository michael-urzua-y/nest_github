import { Controller, Get } from '@nestjs/common';
import { PayinService } from '../application/payin.service';
import { PayinDetailedViewEntity } from '../domain/entities/payin_detailed_view.entity';

@Controller('payins')
export class PayinController {
  constructor(private readonly payinService: PayinService) {}

  @Get()
  async getAllPayins(): Promise<PayinDetailedViewEntity[]> {
    return this.payinService.getAllPayins();
  }
}
