import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Isocode } from './isocode.entity';
import { Type } from './types.entity';
import { Country } from './countrys.entity';

@Entity('currency')
export class Currency {
  @PrimaryGeneratedColumn('uuid')
  currency_id: string;

  @Column()
  name: string;

  @ManyToOne(() => Isocode, { nullable: true })
  @JoinColumn({ name: 'isocode_id' })
  isocode: Isocode;

  @ManyToOne(() => Type, { nullable: true })
  @JoinColumn({ name: 'type_id' })
  type: Type;

  @ManyToOne(() => Country, { nullable: true })
  @JoinColumn({ name: 'country_id' })
  country: Country;

 @Column({ type: 'double precision', nullable: true })
  ivapercent: number;

  @Column({ type: 'text', nullable: true })
  data_convert: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column({ nullable: true })
  deleted_at: Date;
}
