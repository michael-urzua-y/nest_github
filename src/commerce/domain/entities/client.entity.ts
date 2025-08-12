import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Commerce } from './commerce.entity';
import { DocumentType } from './document-type.entity';
import { Country } from '../../../products/domain/entities/countrys.entity';

@Entity('client')
export class Client {
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

  @Column({ nullable: true })
  blocked_restriction: Date;

  @Column({ type: 'text', nullable: true })
  note: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column({ nullable: true })
  deleted_at: Date;
}
