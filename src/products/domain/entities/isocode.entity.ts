import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('isocodes')
export class Isocode {
  @PrimaryGeneratedColumn('uuid')
  isocode_id: string;

  @Column()
  isocode: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column({ nullable: true })
  deleted_at: Date;
}
