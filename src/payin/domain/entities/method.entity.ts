import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('method')
export class Method {
  @PrimaryColumn({ type: 'varchar', length: 10 })
  method_id: string;

  @Column({ type: 'varchar', length: 50 })
  method: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date | null;
}
