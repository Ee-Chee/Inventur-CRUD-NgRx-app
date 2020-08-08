import { GoodsStoreState } from './goods-store';
import { QuantityStoreState } from './quantity-store';

export interface RootState {
    goods: GoodsStoreState.State;
    quantity: QuantityStoreState.State;
}

