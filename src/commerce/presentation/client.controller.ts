import { Controller, Get, Param } from '@nestjs/common';
import { Client } from '../domain/entities/client.entity';
import { ClientService } from '../application/client.service';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  findAll() {
    return this.clientService.getAllClients();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Client | null>  {
    return this.clientService.getClientById(id);
  }

  @Get(':id/country')
  async getClientCountry(@Param('id') id: string) {
  console.log('Obteniendo país del cliente:', id);
  return this.clientService.getClientCountry(id);
}

}
