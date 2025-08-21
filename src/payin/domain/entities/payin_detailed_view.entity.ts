import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'payin_detailed_view' })
export class PayinDetailedViewEntity {
  @PrimaryColumn({ name: 'transaction_id' })
  transactionId: string;

  @Column({ type: 'numeric' })
  amount: number;

  @Column({ type: 'numeric', name: 'real_amount' })
  realAmount: number;

  @Column({ nullable: true })
  reference: string;

  @Column({ nullable: true })
  commentary: string;

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @Column({ name: 'client_name', nullable: true })
  clientName: string;

  @Column({ name: 'country_name', nullable: true })
  countryName: string;

  @Column({ name: 'type_name', nullable: true })
  typeName: string;

  @Column({ name: 'method_name', nullable: true })
  methodName: string;

  @Column({ name: 'status_name', nullable: true })
  statusName: string;

  @Column({ name: 'commission_fee', type: 'numeric', nullable: true })
  commissionFee: number;
}
