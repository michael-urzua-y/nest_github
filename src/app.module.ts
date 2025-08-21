import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

// import { UsersModule } from './payout/users.module';
import { ProductsModule } from './products/products.module';
import { PayinModule } from './payin/payin.module';
// import { PaymentsModule } from './payments/payments.module';
import { CommerceModule } from './commerce/commerce.module';
import { SchemaMiddleware } from './schema/common/middleware/scheme.middleware';
import { SeedModule } from './seed/seed.module';
import { MigrationModule } from './migrations/migration.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule, SeedModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST'),
        port: parseInt(config.get<string>('DB_PORT') ?? '5432', 10),
        username: config.get('DB_USER'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        schema: config.get('DB_SCHEMA'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false, 
        autoLoadEntities: true,
      }),
    }),
    // UsersModule,
    ProductsModule,
    PayinModule,
    CommerceModule,
    MigrationModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  //Configuracion del middleware global
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SchemaMiddleware)
      .forRoutes('*');
  }
}
