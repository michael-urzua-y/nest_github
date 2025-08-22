import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommerceService } from '../application/commerce.service';

@Controller('commerce')
export class CommerceController {
  constructor(private readonly commerceService: CommerceService) { }

  @Get()
  findAll() {
    return this.commerceService.getCommerces();
  }

  
}



