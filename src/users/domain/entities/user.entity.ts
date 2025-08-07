import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Commerce } from './commerce.entity';

@Entity('user')
export class User {
  @PrimaryColumn({ type: 'varchar', length: 100 })
  user_id: string;

  @Column({ name: 'commerce_id', nullable: true })
  commerce_id: string;

  @ManyToOne(() => Commerce, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'commerce_id' })
  commerce: Commerce;

  @Column({ type: 'varchar', length: 100, nullable: true })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  password: string;

  @Column({ type: 'inet', nullable: true })
  ip: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  role: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  permissions: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  position: string;

  @Column({ type: 'boolean', nullable: true })
  is_active: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date;
}
