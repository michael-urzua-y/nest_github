import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Isocode } from './isocode.entity';
import { Type } from './type.entity';
import { Country } from '../../../users/domain/entities/country.entity';

@Entity('currency')
export class Currency {
  @PrimaryColumn({ type: 'varchar', length: 10 })
  currency_id: string;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @ManyToOne(() => Isocode, { cascade: true })
  @JoinColumn({ name: 'isocode_id' })
  isocode: Isocode;

  @ManyToOne(() => Type, { cascade: true })
  @JoinColumn({ name: 'type_id' })
  type: Type;

  @ManyToOne(() => Country, { cascade: true })
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @Column('decimal', { precision: 5, scale: 2 })
  ivapercent: number;

  @Column({ type: 'json' })
  data_convert: Record<string, any>;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date | null;
}
