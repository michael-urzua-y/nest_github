import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('isocode')
export class Isocode {
  @PrimaryColumn({ type: 'varchar', length: 10 })
  isocode_id: string;

  @Column({ type: 'varchar', length: 10 })
  isocode: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date | null;
}
