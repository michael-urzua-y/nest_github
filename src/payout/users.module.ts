// import { Module } from '@nestjs/common';
// import { PayoutService } from './application/payout.service';
// import { UserController } from './presentation/payout.controller';
// // import { Payout } from './domain/entities/payout.entity';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { DatabaseModule } from 'src/database/app.module';
// import { PayoutRepository } from './persistence/payout.repository';

// @Module({
//   imports: [TypeOrmModule.forFeature([Payout]),DatabaseModule],
//   controllers: [UserController],
//   providers: [
//     {
//       provide: 'IUserRepository',
//       useClass: PayoutRepository,
//     },
//     PayoutService,
//   ],
//   exports: [PayoutService],
// })
// export class UsersModule {}

