import { Country } from '../domain/entities/countrys.entity';

export interface ICountryRepository {
  getCountries(): Promise<Country[]>;
  getCountryById(id: string): Promise<Country | null>;
}
