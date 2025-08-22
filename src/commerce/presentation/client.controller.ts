import { Controller, Get, Param, Post, Body, NotFoundException } from '@nestjs/common';
import { ClientService } from '../application/client.service';
import { Client } from '../domain/entities/client';
import { MailService } from 'src/shared/mail/mail.service';

@Controller('clients')
export class ClientController {
  constructor(
    private readonly clientService: ClientService,
    private readonly mailService: MailService
  ) {}

  @Get()
  findAll(): Promise<Client[]> {
    return this.clientService.getAllClients();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Client | null> {
    return this.clientService.getClientById(id);
  }

  @Get(':id/country')
  async getClientCountry(@Param('id') id: string) {
    console.log('[Controller] Obteniendo país del cliente:', id);
    const result = await this.clientService.getClientCountry(id);
    console.log('[Controller] Resultado del país:', result);
    return result;
  }

  
  @Post('reset-password')
    async resetPassword(@Body('email') email: string) {
      const nombre = await this.clientService.getUserNameByEmail(email);

      if (!nombre) {
        throw new NotFoundException(`No se encontró un usuario con el correo: ${email}`);
      }
      console.log({nombre})
      return this.mailService.sendResetPasswordEmail(email, nombre);
    }

}
