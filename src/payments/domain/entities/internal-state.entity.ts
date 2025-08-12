import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { ExternalStateEntity } from './external-state.entity';
import { PayinTrace } from './payin-trace.entity';

@Entity('internal_state')
export class InternalState {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => ExternalStateEntity, external => external.internalStates)
  @JoinColumn({ name: 'external_state_id' })
  externalState: ExternalStateEntity;

  @OneToMany(() => PayinTrace, trace => trace.internalState)
  traces: PayinTrace[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at?: Date;
}
