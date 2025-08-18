// src/products/application/country.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { Country } from '../domain/entities/countrys.entity';
// import type { ICountryPort } from '../infrastucture/adapters/country.adapter';
import type { ICountryRepository } from '../persistence/country.repository.interface';

@Injectable()
export class CountryService {
  constructor(
    @Inject('ICountryRepository') 
    private readonly countryRepo: ICountryRepository,
  ) {}

  getAllCountries(): Promise<Country[]> {
    return this.countryRepo.getCountries();
  }

  getCountryById(id: string): Promise<Country | null> {
    return this.countryRepo.getCountryById(id);
  }
}
