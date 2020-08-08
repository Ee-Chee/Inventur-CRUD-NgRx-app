import { createSelector, MemoizedSelector } from '@ngrx/store';
import { QuantityStoreSelectors } from './quantity-store';
import { GoodsStoreSelectors } from './goods-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
    QuantityStoreSelectors.selectRequestError,
    GoodsStoreSelectors.selectRequestError,
    (quantityError: string, goodsError: string) => {
      return quantityError || goodsError;
    }
  );
  
export const selectIsLoading: MemoizedSelector<object, boolean> = createSelector(
    QuantityStoreSelectors.selectRequetIsLoading,
    GoodsStoreSelectors.selectRequetIsLoading,
    (quantityLoading: boolean, goodsLoading: boolean) => {
      return quantityLoading || goodsLoading;
    }
  );