import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Client } from '../../../commerce/domain/entities/client.entity';
import { Type } from '../../../products/domain/entities/types.entity';
import { Method } from '../../../products/domain/entities/methods.entity';
import { Status } from '../../../products/domain/entities/status.entity';
import { Country } from '../../../products/domain/entities/countrys.entity';
import { Commission } from './commissions.entity';
import { PayinTrace } from './payin-trace.entity';

@Entity('payin')
export class Payin {
  @PrimaryGeneratedColumn('uuid')
  transaction_id: string;

  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id' })
  client: Client;

  @ManyToOne(() => Type)
  @JoinColumn({ name: 'type_id' })
  type: Type;

  @ManyToOne(() => Method)
  @JoinColumn({ name: 'method_id' })
  method: Method;

  @ManyToOne(() => Status)
  @JoinColumn({ name: 'statu_id' })
  status: Status;

  @ManyToOne(() => Country)
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @OneToOne(() => Commission, commission => commission.payin)
  @JoinColumn({ name: 'commission_id' })
  commission: Commission;

  @OneToMany(() => PayinTrace, trace => trace.payin)
  traces: PayinTrace[];

  @Column('decimal', { precision: 12, scale: 2, nullable: true })
  amount: number;

  @Column('decimal', { precision: 12, scale: 2, nullable: true })
  real_amount: number;

  @Column({ nullable: true })
  token_ws: string;

  @Column({ nullable: true })
  reference: string;

  @Column({ type: 'text', nullable: true })
  commentary: string;

  @Column({ nullable: true })
  url_confirmation: string;

  @Column({ nullable: true })
  url_final: string;

  @Column({ nullable: true })
  metadata: string;
  
  @Column({ type: 'text', nullable: true })
  note: string;

  @Column({ nullable: true })
  code_response_webhook: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at?: Date;
}
