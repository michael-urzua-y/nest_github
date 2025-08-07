import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Commerce } from './commerce.entity';
import { Country } from './country.entity';
import { DocumentType } from './document_type.entity';

@Entity('client')
export class Client {
  @PrimaryColumn({ type: 'varchar', length: 10 })
  client_id: string;

  @ManyToOne(() => Commerce, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'commerce_id' })
  commerce: Commerce;

  @ManyToOne(() => Country, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @Column({ type: 'varchar', length: 100 })
  fullname: string;

  @Column({ type: 'varchar', length: 20 })
  document: string;

  @Column({ type: 'varchar', length: 10 })
  document_format: string;

  @ManyToOne(() => DocumentType, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'document_type_id' })
  document_type: DocumentType;

  @Column({ type: 'boolean' })
  blocked: boolean;

  @Column({ type: 'varchar', length: 100, nullable: true })
  blocked_restriction: string;

  @Column({ type: 'text', nullable: true })
  note: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date;
}
