// src/products/infrastructure/adapters/country.adapter.ts
import { Injectable, Inject } from '@nestjs/common';
import { Country } from '../../domain/entities/countrys.entity';
import type { ICountryRepository } from '../../persistence/country.repository.interface';

export interface ICountryPort {
  getCountries(): Promise<Country[]>;
  getCountryById(id: string): Promise<Country | null>;
}

@Injectable()
export class CountryAdapter implements ICountryPort {
  constructor(
    @Inject('ICountryRepository') private readonly countryRepo: ICountryRepository,
  ) {}

  getCountries(): Promise<Country[]> {
    return this.countryRepo.getCountries();
  }

  getCountryById(id: string): Promise<Country | null> {
    return this.countryRepo.getCountryById(id);
  }
}
