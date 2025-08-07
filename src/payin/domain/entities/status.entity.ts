import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('status')
export class Status {
  @PrimaryColumn({ type: 'varchar', length: 10 })
  statu_id: string;

  @Column({ type: 'varchar', length: 50 })
  statu: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date | null;
}
