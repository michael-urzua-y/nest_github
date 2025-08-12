import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Currency } from '../../../products/domain/entities/currency.entity';
import { Type } from '../../../products/domain/entities/types.entity';
import { Payin } from './payin.entity';

@Entity('commissions')
export class Commission {
  @PrimaryGeneratedColumn('uuid')
  commission_id: string;

  @ManyToOne(() => Currency)
  @JoinColumn({ name: 'currency_id' })
  currency: Currency;

  @ManyToOne(() => Type)
  @JoinColumn({ name: 'type_id' })
  type: Type;

  @OneToOne(() => Payin, payin => payin.commission)
  payin: Payin;

  @Column('decimal', { precision: 14, scale: 4, nullable: true })
  transaction_amount: number;

  @Column('decimal', { precision: 14, scale: 4, nullable: true })
  amount: number;

  @Column('decimal', { precision: 14, scale: 4, nullable: true })
  ivaamount: number;

  @Column({ type: 'double precision', nullable: true })
  ivapercent: number;

  @Column({ type: 'double precision', nullable: true })
  percent: number;

  @Column('decimal', { precision: 14, scale: 4, nullable: true })
  commission_total: number;

  @Column('decimal', { precision: 14, scale: 4, nullable: true })
  iva_total: number;

  @Column('decimal', { precision: 14, scale: 4, nullable: true })
  minimun_rate: number;

  @Column('decimal', { precision: 14, scale: 4, nullable: true })
  iva_minimun_rate: number;

  @Column('decimal', { precision: 14, scale: 4, nullable: true })
  flate_rate: number;

  @Column('decimal', { precision: 14, scale: 4, nullable: true })
  iva_flate_rate: number;

  @Column({ nullable: true })
  applied_rate: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at?: Date;
}
