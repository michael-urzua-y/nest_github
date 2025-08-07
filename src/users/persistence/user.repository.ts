import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../domain/entities/user.entity';
import { IUserRepository } from './user.repository.interface';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.repo.find();
  }

  async findById(id: string): Promise<User | null> {
    return this.repo.findOne({ where: { user_id: id } });
  }

  async create(user: Partial<User>): Promise<User> {
    const newUser = this.repo.create(
      user
    );
    return this.repo.save(newUser);
  }

  async update(id: string, user: Partial<User>): Promise<User> {
    await this.repo.update(id, user);
    return this.findById(id) as Promise<User>;
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
