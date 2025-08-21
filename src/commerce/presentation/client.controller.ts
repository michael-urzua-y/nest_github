import { Controller, Get, Param } from '@nestjs/common';
import { ClientService } from '../application/client.service';
import { Client } from '../domain/entities/client';

// Este controlador maneja las rutas relacionadas con los clientes.
// No contiene lógica de negocio, solo delega al servicio (ClientService).

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  // Ruta GET /clients
  // Devuelve todos los clientes como entidades de dominio.
  @Get()
  findAll(): Promise<Client[]> {
    return this.clientService.getAllClients();
  }

  // Ruta GET /clients/:id
  // Busca un cliente por su ID y lo devuelve como entidad de dominio.
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Client | null> {
    return this.clientService.getClientById(id);
  }

  // Ruta GET /clients/:id/country
  // Obtiene el país asociado al cliente.
  // Se usa console.log para seguir el flujo mientras se desarrolla.
  @Get(':id/country')
  async getClientCountry(@Param('id') id: string) {
    console.log('[Controller] Obteniendo país del cliente:', id);
    const result = await this.clientService.getClientCountry(id);
    console.log('[Controller] Resultado del país:', result);
    return result;
  }
}
