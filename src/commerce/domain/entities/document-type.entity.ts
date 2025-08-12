import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('document_type')
export class DocumentType {
  @PrimaryGeneratedColumn('uuid')
  document_type_id: string;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column({ nullable: true })
  deleted_at: Date;
}
