import { Injectable, Inject } from '@nestjs/common';
import { Client } from '../domain/entities/client.entity';
import { Country } from '../../products/domain/entities/countrys.entity';
import type { IClientRepository } from '../persistance/client.repository.interface';
import type { ICountryPort } from '../domain/ports/country.port';



@Injectable()
export class ClientService {
  constructor(
    @Inject('IClientRepository') private readonly cliRepo: IClientRepository,
    @Inject('ICountryPort') private readonly countryPort: ICountryPort,
  ) {}

  getAllClients(): Promise<Client[]> {
    return this.cliRepo.getAll();
  }

  getClientById(id: string): Promise<Client | null> {
    return this.cliRepo.getById(id);
  }

  async getClientCountry(id: string): Promise<Country | null> {
    const client = await this.cliRepo.getById(id);
    if (!client) return null;
    console.log('Cliente encontrado:', client);
    return this.countryPort.findCountryById(client.country?.country_id);
  }
}

