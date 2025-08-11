//Controlan rutas, son los encargados de escuchar la solicitud y emitir una respuesta.
//Ej: Rutas CRUD

import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from '../application/user.service';
import { User } from '../domain/entities/user.entity';
import { UpdateUserDto } from '../domain/dto/update-user.dto';
import { CreateUserDto } from '../domain/dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User | null> {
    return this.userService.getUserById(id);
  }

  @Post()
  create(@Body() userData: CreateUserDto): Promise<User> {
    return this.userService.createUser(userData);
  }

  @Put(':id')
  update(
  @Param('id') id: string,
  @Body() updateUserDto: UpdateUserDto,): Promise<User> {
    return this.userService.updateUser(id, updateUserDto);
  }


  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    await this.userService.deleteUser(id);
    return { message: 'User deleted successfully' };
  }
}
