import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommerceService } from '../application/commerce.service';
import { Commerce } from '../domain/entities/commerce.entity';
import { CreateCommerceDto } from '../domain/dto/create-commerce.dto';
import { UpdateCommerceDto } from '../domain/dto/update-commerce.dto';
import { promises } from 'dns';

@Controller('commerce')
export class CommerceController {
  constructor(private readonly commerceService: CommerceService) {}

   @Get()
  findAll() {
    // return this.commerceService.findAll();
    return this.commerceService.getCommerces();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Commerce | null>  {
    return this.commerceService.getCommerceById(id);
  }

  @Post()
  create(@Body() dto: CreateCommerceDto):Promise<Commerce> {
    return this.commerceService.createCommerce(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, 
  @Body() dto: UpdateCommerceDto): Promise <Commerce> {
    return this.commerceService.updateCommerce(id, dto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.commerceService.remove(id);
  // }
}
