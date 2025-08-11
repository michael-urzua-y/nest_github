import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommerceService } from '../application/commerce.service';
import { CreateCommerceDto } from '../domain/dto/create-commerce.dto';
import { UpdateCommerceDto } from '../domain/dto/update-commerce.dto';

@Controller('commerce')
export class CommerceController {
  constructor(private readonly commerceService: CommerceService) {}

   @Get()
  findAll() {
    // return this.commerceService.findAll();
    return this.commerceService.getCommerces();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.commerceService.findOne(id);
  // }

  // @Post()
  // create(@Body() dto: CreateCommerceDto) {
  //   return this.commerceService.create(dto);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() dto: UpdateCommerceDto) {
  //   return this.commerceService.update(id, dto);
  // }
  

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.commerceService.remove(id);
  // }
}
