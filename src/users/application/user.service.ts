import { Injectable, Inject } from '@nestjs/common';
import { User } from '../domain/entities/user.entity';
import type { IUserRepository } from '../persistence/user.repository.interface';

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

  async createUser(data: Partial<User>): Promise<User> {
    return this.userRepo.create(data);
  }

  async updateUser(id: string, data: Partial<User>): Promise<User> {
    return this.userRepo.update(id, data);
  }

  async deleteUser(id: string): Promise<void> {
    return this.userRepo.delete(id);
  }
}
