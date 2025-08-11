import { Module } from '@nestjs/common';
import { CommerceService } from './application/commerce.service';
import { CommerceController } from './presentation/commerce.controller';
import { Commerce } from './domain/entities/commerce.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/app.module';
import { CommerceRepository } from './persistance/commerce.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Commerce]), DatabaseModule],
  controllers: [CommerceController],
  providers: [
      {
        provide: 'ICommerceRepository',
        useClass: CommerceRepository,
      },
      CommerceService,
    ],
    exports: [CommerceService],
  })
export class CommerceModule { }
