import { Module } from '@nestjs/common';
import { UserService } from './application/user.service';
import { UserController } from './presentation/user.controller';
import { User } from './domain/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/app.module';
import { UserRepository } from './persistence/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User]),DatabaseModule],
  controllers: [UserController],
  providers: [
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
    UserService,
  ],
  exports: [UserService],
})
export class UsersModule {}

