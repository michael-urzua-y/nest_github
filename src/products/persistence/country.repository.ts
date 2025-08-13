import { Injectable } from '@nestjs/common';
import { TenantConnectionService } from 'src/database/tenant-connection.service';
import { Country } from '../domain/entities/countrys.entity';
import { ICountryRepository } from './country.repository.interface';
import { Repository } from 'typeorm';

@Injectable()
export class CountryRepository implements ICountryRepository {
  constructor(private readonly tenantService: TenantConnectionService) {}

  private async getRepo(): Promise<Repository<Country>> {
    const dataSource = await this.tenantService.getDataSource();
    return dataSource.getRepository(Country);
  }

  async getCountries(): Promise<Country[]> {
    const repo = await this.getRepo();
    return repo.find();
  }

  async getCountryById(id: string): Promise<Country | null> {
    const repo = await this.getRepo();
    return repo.findOne({ where: { country_id: id } });
  }
}
