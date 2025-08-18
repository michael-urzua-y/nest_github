import { Inject, Injectable } from '@nestjs/common';
import { ICountryPort } from '../../domain/ports/country.port';
import { Country } from '../../../products/domain/entities/countrys.entity';
// import type { ICountryRepository } from '../../../products/persistence/country.repository.interface';
import type { CountryService } from '../../../products/application/country.service';

@Injectable()
export class CountryAdapter implements ICountryPort {
  constructor(
    @Inject('ICountryService')
    private readonly countryService: CountryService,
  ) {}

  async findCountryById(id: string): Promise<Country | null> {
    console.log('Buscando país con ID:', id);
    return this.countryService.getCountryById(id);
  }

  async listCountries(): Promise<Country[]> {
    return this.countryService.getAllCountries();
  }
}
