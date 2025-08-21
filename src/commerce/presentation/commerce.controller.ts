import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommerceService } from '../application/commerce.service';
import { CreateCommerceDto } from '../domain/dto/create-commerce.dto';

@Controller('commerce')
export class CommerceController {
  constructor(private readonly commerceService: CommerceService) { }

  @Get()
  findAll() {
    return this.commerceService.getCommerces();
  }

  @Post()
  create(@Body() dto: CreateCommerceDto) {
    return this.commerceService.createCommerce(dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commerceService.deleteCommerce(id);
  }
}


// @Get(':id')
// findOne(@Param('id') id: string) {
//   return this.commerceService.findOne(id);
// }


//   @Patch(':id')
//   update(@Param('id') id: string, @Body() dto: UpdateCommerceDto) {
//     return this.commerceService.update(id, dto);
//   }

