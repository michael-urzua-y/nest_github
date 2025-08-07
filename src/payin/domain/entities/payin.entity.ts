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
import { Commission } from './commission.entity';
import { Client } from '../../../users/domain/entities/client.entity';
import { Country } from '../../../users/domain/entities/country.entity';
import { Type } from './type.entity';
import { Method } from './method.entity';
import { Status } from './status.entity';

@Entity('payin')
export class Payin {
  @PrimaryColumn({ type: 'varchar', length: 20 })
  transaction_id: string;

  @ManyToOne(() => Currency, { cascade: true })
  @JoinColumn({ name: 'currency_id' })
  currency: Currency;

  @ManyToOne(() => Client, { cascade: true })
  @JoinColumn({ name: 'client_id' })
  client: Client;

  @Column({ type: 'varchar', length: 100, nullable: true })
  client_email_id: string | null;

  @Column({ type: 'varchar', length: 100, nullable: true })
  client_phone_id: string | null;

  @ManyToOne(() => Type, { cascade: true })
  @JoinColumn({ name: 'type_id' })
  type: Type;

  @ManyToOne(() => Method, { cascade: true })
  @JoinColumn({ name: 'method_id' })
  method: Method;

  @ManyToOne(() => Status, { cascade: true })
  @JoinColumn({ name: 'statu_id' })
  statu: Status;

  @ManyToOne(() => Country, { cascade: true })
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column('decimal', { precision: 10, scale: 2 })
  real_amount: number;

  @Column({ type: 'varchar', length: 100 })
  token_ws: string;

  @Column({ type: 'varchar', length: 100 })
  reference: string;

  @Column({ type: 'text' })
  commentary: string;

  @Column({ type: 'varchar' })
  url_confirmation: string;

  @Column({ type: 'varchar' })
  url_final: string;

  @Column({ type: 'json' })
  metadata: Record<string, any>;

  @Column({ type: 'text' })
  note: string;

  @ManyToOne(() => Commission, { cascade: true })
  @JoinColumn({ name: 'commission_id' })
  commission: Commission;

  @Column({ type: 'varchar', length: 100 })
  code_response_webhook: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date | null;
}
