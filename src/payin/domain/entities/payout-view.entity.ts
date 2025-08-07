import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('payout_view')
export class PayoutView {
  @PrimaryColumn({ type: 'varchar', length: 100 })
  referencia: string;

  @Column({ type: 'varchar', length: 255 })
  usuario: string;

  @Column({ type: 'varchar', length: 100 })
  pais: string;

  @Column({ type: 'varchar', length: 100 })
  estado: string;

  @Column({ type: 'varchar', length: 100 })
  tipo: string;

  @Column({ type: 'varchar', length: 255 })
  comercio: string;

  @Column({ type: 'varchar', length: 50 })
  moneda: string;
}
