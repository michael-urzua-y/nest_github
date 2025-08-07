import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Currency } from './currency.entity';
import { Type } from './type.entity';

@Entity('commission')
export class Commission {
  @PrimaryColumn({ type: 'varchar', length: 10 })
  commission_id: string;

  @ManyToOne(() => Currency, { cascade: true })
  @JoinColumn({ name: 'currency_id' })
  currency: Currency;

  @ManyToOne(() => Type, { cascade: true })
  @JoinColumn({ name: 'type_id' })
  type: Type;

  @Column('decimal', { precision: 10, scale: 2 })
  transaction_amount: number;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column('decimal', { precision: 10, scale: 2 })
  ivaamount: number;

  @Column('decimal', { precision: 5, scale: 2 })
  ivapercent: number;

  @Column('decimal', { precision: 5, scale: 2 })
  percent: number;

  @Column('decimal', { precision: 10, scale: 2 })
  commission_total: number;

  @Column('decimal', { precision: 10, scale: 2 })
  iva_total: number;

  @Column('decimal', { precision: 10, scale: 2 })
  minimun_rate: number;

  @Column('decimal', { precision: 10, scale: 2 })
  iva_minimun_rate: number;

  @Column('decimal', { precision: 10, scale: 2 })
  flate_rate: number;

  @Column('decimal', { precision: 10, scale: 2 })
  iva_flate_rate: number;

  @Column({ type: 'varchar', length: 50 })
  applied_rate: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date | null;
}
