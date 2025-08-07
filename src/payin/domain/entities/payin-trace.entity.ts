import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Payin } from './payin.entity';
import { InternalState } from './internal-state.entity';

@Entity('payin_trace')
export class PayinTrace {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Payin, { cascade: true })
  @JoinColumn({ name: 'transaction_id' })
  transaction: Payin;

  @Column({ type: 'json' })
  request: Record<string, any>;

  @Column({ type: 'json' })
  response: Record<string, any>;

  @ManyToOne(() => InternalState, { cascade: true })
  @JoinColumn({ name: 'internal_state_id' })
  internal_state: InternalState;

  @Column({ type: 'timestamp' })
  timestamp: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date | null;
}
