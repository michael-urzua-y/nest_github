//Controlan rutas, son los encargados de escuchar la solicitud y emitir una respuesta.
//Ej: Rutas CRUD

import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PayoutService } from '../application/payout.service';
// import { Payout } from '../domain/entities/payout.entity';
import { UpdatePayoutDto } from '../domain/dto/update-payout.dto';
import { CreatePayoutDto } from '../domain/dto/create-payout.dto';

@Controller('users')
export class UserController {
  constructor(private readonly payoutService: PayoutService) {}

  // @Get()
  // findAll(): Promise<User[]> {
  //   return this.userService.getUsers();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string): Promise<User | null> {
  //   return this.userService.getUserById(id);
  // }
}
