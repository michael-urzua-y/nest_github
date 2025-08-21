import { PayinDetailedViewEntity } from '../domain/entities/payin_detailed_view.entity';

export interface IPayinRepository {
  findAllPayins(): Promise<PayinDetailedViewEntity[]>;
}
