import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('payin_view')
export class PayinView {
  @PrimaryColumn({ type: 'varchar', length: 100 })
  referencia: string;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column({ type: 'varchar', length: 100 })
  estado: string;

  @Column({ type: 'varchar', length: 100 })
  tipo: string;

  @Column({ type: 'varchar', length: 100 })
  metodo: string;

  @Column({ type: 'varchar', length: 255 })
  comercio: string;

  @Column({ type: 'varchar', length: 50 })
  moneda: string;

  @Column({ type: 'timestamp' })
  creado: Date;
}
