import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Commerce } from '../../../commerce/domain/entities/commerce.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @ManyToOne(() => Commerce)
  @JoinColumn({ name: 'commerce_id' })
  commerce: Commerce;

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

  @Column()
  is_active: boolean;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column({ nullable: true })
  deleted_at: Date;
}
