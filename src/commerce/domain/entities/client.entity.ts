import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Commerce } from './commerce.entity';
import { DocumentType } from './document-type.entity';
import { Country } from '../../../products/domain/entities/countrys.entity';

@Entity('client')
export class ClientOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  client_id: string;

  @ManyToOne(() => Commerce)
  @JoinColumn({ name: 'commerce_id' })
  commerce: Commerce;

  @ManyToOne(() => Country, { nullable: true })
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @Column()
  fullname: string;

  @Column()
  document: string;

  @Column()
  document_format: string;

  @ManyToOne(() => DocumentType)
  @JoinColumn({ name: 'document_type_id' })
  documentType: DocumentType;

  @Column({ type: 'boolean', nullable: true })
  blocked: number;

  @Column({ type: 'timestamp', nullable: true })
  blocked_restriction: Date | null;

  @Column({ type: 'text', nullable: true })
  note: string | null;

  @Column({ type: 'timestamp' })
  created_at: Date;

  @Column({ type: 'timestamp' })
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date | null;
}
