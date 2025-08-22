import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Commerce } from './commerce.entity';

@Entity({ name: 'user', schema: 'betano_cl' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  ip: string;

  @Column()
  role: string;

  @Column()
  permissions: string;

  @Column()
  position: string;

  @Column({ name: 'is_active' })
  is_active: boolean;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deleted_at?: Date;

  @Column({ type: 'uuid', nullable: true })
  commerce_id?: string;

  @ManyToOne(() => Commerce, { nullable: true })
  @JoinColumn({ name: 'commerce_id' })
  commerce?: Commerce;
}
