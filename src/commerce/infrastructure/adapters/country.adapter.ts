import { Inject, Injectable } from '@nestjs/common';
import { ICountryPort } from '../../domain/ports/country.port';
import { Country } from '../../../products/domain/entities/countrys.entity';
import type { CountryService } from '../../../products/application/country.service';

// Este adapter implementa el puerto ICountryPort.
// Su función es conectar la lógica de dominio (puerto) con la implementación real (servicio).
// Aquí se traduce lo que el dominio necesita en llamadas concretas al CountryService.

@Injectable()
export class CountryAdapter implements ICountryPort {
  constructor(
    // Inyectamos el servicio real que sabe cómo obtener los países.
    // Este servicio puede usar ORM, APIs externas, etc.
    @Inject('ICountryService')
    private readonly countryService: CountryService,
  ) {}

  // Implementación del método definido en el puerto.
  // Busca un país por su ID usando el servicio real.
  async findCountryById(id: string): Promise<Country | null> {
    console.log('[Adapter] Buscando país con ID:', id);
    const country = await this.countryService.getCountryById(id);
    console.log('[Adapter] Resultado desde CountryService:', country);
    return country;
  }

  // Implementación del método para listar todos los países.
  async listCountries(): Promise<Country[]> {
    return this.countryService.getAllCountries();
  }
}
