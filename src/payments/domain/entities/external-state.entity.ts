import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { InternalState } from './internal-state.entity';

@Entity('external_state')
export class ExternalStateEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  external_state: string;

  @OneToMany(() => InternalState, internal => internal.externalState)
  internalStates: InternalState[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at?: Date;
}
