import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('countrys')
export class Country {
  @PrimaryGeneratedColumn('uuid')
  country_id: string;

  @Column()
  country: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column({ nullable: true })
  deleted_at: Date;
}
