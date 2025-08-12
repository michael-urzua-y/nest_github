import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('methods')
export class Method {
  @PrimaryGeneratedColumn('uuid')
  method_id: string;

  @Column()
  method: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column({ nullable: true })
  deleted_at: Date;
}
