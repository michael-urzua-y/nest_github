import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entidades
import { Commerce } from './domain/entities/commerce.entity';
import { Client } from './domain/entities/client.entity';

// Controladores
import { CommerceController } from './presentation/commerce.controller';
import { ClientController } from './presentation/client.controller';

// Servicios de aplicación
import { CommerceService } from './application/commerce.service';
import { ClientService } from './application/client.service';

// Repositorios y adapters
import { CommerceRepository } from './persistance/commerce.repository';
import { ClientRepository } from './persistance/client.repository';
import { CountryAdapter } from './infrastructure/adapters/country.adapter'; 

import { DatabaseModule } from 'src/database/app.module';
import { ProductsModule } from '../products/products.module'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Commerce, Client]),
    DatabaseModule,
    ProductsModule,
  ],
  controllers: [CommerceController, ClientController],
  providers: [
    // Commerce
    { provide: 'ICommerceRepository', useClass: CommerceRepository },
    CommerceService,

    // Client
    { provide: 'IClientRepository', useClass: ClientRepository },
    { provide: 'ICountryPort', useClass: CountryAdapter }, 
    ClientService,
  ],
  exports: [
    'ICommerceRepository',
    CommerceService,
    ClientService,
  ],
})
export class CommerceModule {}
