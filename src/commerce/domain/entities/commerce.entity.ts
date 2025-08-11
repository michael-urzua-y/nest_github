import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
import { User } from '../../../users/domain/entities/user.entity';

@Entity('commerce')
export class Commerce {
  @PrimaryGeneratedColumn('uuid')
  commerce_id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 50 })
  document: string;

  @Column({ type: 'varchar', length: 5 })
  iso_code: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => User, user => user.commerce)
  users: User[];
}
