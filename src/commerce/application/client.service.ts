import { Injectable, Inject } from '@nestjs/common';
import type { IClientRepository } from '../persistance/client.repository.interface';
import { Client } from '../domain/entities/client';
import { ClientCountryFacade } from './facades/client-country.facade';

// Este servicio representa la capa de aplicación.
// Aquí se define la lógica que conecta el controlador con el dominio y los repositorios.
// No se accede directamente a la base de datos ni al ORM, todo pasa por interfaces y facades.

@Injectable()
export class ClientService {
  constructor(
    // Inyectamos el repositorio usando su interfaz, lo que permite desacoplar la implementación.
    @Inject('IClientRepository') private readonly cliRepo: IClientRepository,

    // Inyectamos el facade que encapsula la lógica para obtener el país del cliente.
    private readonly clientCountryFacade: ClientCountryFacade,
  ) {}

  // Método para obtener todos los clientes.
  // Llama al repositorio, que se encarga de acceder a la base de datos.
  async getAllClients(): Promise<Client[]> {
    return this.cliRepo.getAll();
  }

  // Método para obtener un cliente por su ID.
  // Devuelve una entidad de dominio o null si no se encuentra.
  async getClientById(id: string): Promise<Client | null> {
    return this.cliRepo.getById(id);
  }

  // Método para obtener el país de un cliente desde Producto.
  // Usa el facade para encapsular la lógica relacionada con el país.
  // Se agregan logs para seguir el flujo durante el desarrollo.
  async getClientCountry(id: string) {
    console.log('[Service] Buscando país para cliente:', id);
    const result = await this.clientCountryFacade.getCountryOfClient(id);
    console.log('[Service] Resultado desde facade:', result);
    return result;
  }
}
