import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ExternalState } from './external-state.entity';

@Entity('internal_state')
export class InternalState {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ExternalState, { cascade: true })
  @JoinColumn({ name: 'external_state_id' })
  external_state: ExternalState;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date | null;
}
