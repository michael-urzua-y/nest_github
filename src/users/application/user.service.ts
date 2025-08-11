import { Injectable, Inject } from '@nestjs/common';
import { User } from '../domain/entities/user.entity';
import type { IUserRepository } from '../persistence/user.repository.interface';
import { CreateUserDto } from '../domain/dto/create-user.dto';
import { UpdateUserDto } from '../domain/dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepo: IUserRepository,
  ) {}

  async getUsers(): Promise<User[]> {
    return this.userRepo.findAll();
  }

  async getUserById(id: string): Promise<User | null> {
    return this.userRepo.findById(id);
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepo.create(createUserDto);
  }

  
  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userRepo.update(id, updateUserDto);
  }


  async deleteUser(id: string): Promise<void> {
    return this.userRepo.delete(id);
  }
}
