// src/products/presentation/country.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { CountryService } from '../application/country.service';
import { Country } from '../domain/entities/countrys.entity';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  findAll(): Promise<Country[]> {
    return this.countryService.getAllCountries();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Country | null> {
    return this.countryService.getCountryById(id);
  }
}
