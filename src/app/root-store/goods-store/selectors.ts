import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { Good } from '../../interfaces/good';
import { goodsAdapter, State } from './state';

export const getError = (state: State): any => state.error; 

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectGoodsState: MemoizedSelector<object, State> = createFeatureSelector<State>('goods');

export const selectGoods: (state: object) => 
    Good[] = goodsAdapter.getSelectors(selectGoodsState).selectAll;

export const selectRequestError: MemoizedSelector<object, any> = createSelector(
    selectGoodsState,
    getError
);

export const selectRequetIsLoading: MemoizedSelector<object,boolean> = createSelector(
    selectGoodsState, 
    getIsLoading
);