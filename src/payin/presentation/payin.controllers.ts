import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PayinService } from '../application/payin.service';
import { Payin } from '../domain/entities/payin.entity';

@Controller('payin')
export class PayinController {
  constructor(private readonly payinService: PayinService) {}

  @Get()
  findAll(): Promise<Payin[]> {
    return this.payinService.getUsers();
  }
}