import { Inject, Injectable } from '@nestjs/common';
import { ICountryPort } from '../../domain/ports/country.port';
import { Country } from '../../../products/domain/entities/countrys.entity';
import type { ICountryRepository } from '../../../products/persistence/country.repository.interface';

// Adaptador - implementa el puerto y por dentro llama a ICountryService del módulo products
@Injectable()
export class CountryAdapter implements ICountryPort {
  constructor(
    @Inject('ICountryService')
    private readonly countryService: ICountryRepository,
  ) {}

  async findCountryById(id: string): Promise<Country | null> {
    return this.countryService.getCountryById(id);
  }

  async listCountries(): Promise<Country[]> {
    return this.countryService.getCountries();
  }
}
