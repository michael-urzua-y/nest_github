// src/products/application/country.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { Country } from '../domain/entities/countrys.entity';
import type { ICountryPort } from '../infrastucture/adapters/country.adapter';

@Injectable()
export class CountryService {
  constructor(
    @Inject('ICountryPort') private readonly countryPort: ICountryPort,
  ) {}

  getAllCountries(): Promise<Country[]> {
    return this.countryPort.getCountries();
  }

  getCountryById(id: string): Promise<Country | null> {
    return this.countryPort.getCountryById(id);
  }
}
