import { Injectable, Inject } from '@nestjs/common';
import type { IClientRepository } from '../../persistance/client.repository.interface';
import type { ICountryPort } from '../../domain/ports/country.port';
import { Country } from '../../../products/domain/entities/countrys.entity';

// Este facade encapsula la lógica para obtener el país de un cliente desde Producto.
// Actúa como un intermediario entre el servicio y los repositorios/ports.
// Su objetivo es simplificar el acceso a datos relacionados, en este caso cliente y país(Producto).

@Injectable()
export class ClientCountryFacade {
  constructor(
    // Inyectamos el repositorio de clientes usando su interfaz.
    // Esto permite que el facade obtenga los datos del cliente sin depender de una implementación específica.
    @Inject('IClientRepository') private readonly clientRepo: IClientRepository,

    // Inyectamos el port de país, que define cómo se accede a la información del país.
    // Nuevamente, usamos una interfaz para mantener el desacoplamiento.
    @Inject('ICountryPort') private readonly countryPort: ICountryPort,
  ) {}

  // Método principal del facade: obtiene el país de un cliente dado su ID.
  async getCountryOfClient(clientId: string): Promise<Country | null> {
    console.log('[Facade] Buscando cliente con ID:', clientId);
    const client = await this.clientRepo.getById(clientId);
    console.log('[Facade] Cliente encontrado:', client);

    // Si el cliente no existe o no tiene countryId, devolvemos null.
    if (!client || !client.countryId) {
      console.log('[Facade] Cliente no tiene countryId o no existe');
      return null;
    }

    // Si el cliente tiene countryId, buscamos el país usando el port.
    console.log('[Facade] Buscando país con ID:', client.countryId);
    const country = await this.countryPort.findCountryById(client.countryId);
    console.log('[Facade] País encontrado:', country);
    return country;
  }
}
