import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './users/application/user.service';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello() {
    return this.userService.getUsers();
  }

  // @Post()
  // async create(@Body() userData: CreateUserDto): Promise<User> {
  //   return this.userService.createUser(userData);
  // }


}
