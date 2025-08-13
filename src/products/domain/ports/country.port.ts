import { Country } from '../entities/countrys.entity';

export interface ICountryPort {
  listCountries(): Promise<Country[]>;
  getCountry(id: string): Promise<Country | null>;
}
