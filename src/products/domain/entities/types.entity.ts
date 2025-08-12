import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('types')
export class Type {
  @PrimaryGeneratedColumn('uuid')
  type_id: string;

  @Column()
  type: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column({ nullable: true })
  deleted_at: Date;
}
