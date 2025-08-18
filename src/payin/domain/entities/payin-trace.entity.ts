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
import { Payin } from './payin.entity';
import { InternalState } from './internal-state.entity';

@Entity('payin_trace')
export class PayinTrace {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Payin, payin => payin.traces)
  @JoinColumn({ name: 'transaction_id' })
  payin: Payin;

  @ManyToOne(() => InternalState, state => state.traces)
  @JoinColumn({ name: 'internal_state_id' })
  internalState: InternalState;

  @Column({ nullable: true })
  request: string;

  @Column({ nullable: true })
  response: string;

  @Column({ nullable: true })
  timestamp: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at?: Date;
}
