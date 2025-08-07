import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('commerce')
export class Commerce {
  @PrimaryColumn({ type: 'varchar', length: 10 })
  commerce_id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 20 })
  document: string;

  @Column({ type: 'varchar', length: 10 })
  document_format: string;

  @Column({ type: 'varchar', length: 10 })
  iso_code: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date;
}
