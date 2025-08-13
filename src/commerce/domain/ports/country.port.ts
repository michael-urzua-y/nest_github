import { Country } from '../../../products/domain/entities/countrys.entity';
// Puerto - contrato de lo que commerce necesita de country.
export interface ICountryPort {
  findCountryById(id: string): Promise<Country | null>;
  listCountries(): Promise<Country[]>;
}
