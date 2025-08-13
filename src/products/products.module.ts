import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './domain/entities/countrys.entity';
import { CountryService } from './application/country.service';
import { CountryRepository } from './persistence/country.repository';
import { CountryAdapter } from './infrastucture/adapters/country.adapter';
import { DatabaseModule } from 'src/database/app.module';
import { CountryController } from './presentation/country.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Country]), DatabaseModule],
  controllers: [CountryController],
  providers: [
    { provide: 'ICountryRepository', useClass: CountryRepository },
    { provide: 'ICountryPort', useClass: CountryAdapter },
    CountryService,
  ],
  exports: [CountryService, 'ICountryPort'],
})
export class ProductsModule {}
