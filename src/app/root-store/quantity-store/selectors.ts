import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { State } from './state';

const getError = (state: State): any => state.error; 

const getIsLoading = (state: State): boolean => state.isLoading;

const getQuantity = (state: State): number[] => {
    return state.quantityArray;
}

export const selectQuantityState: MemoizedSelector<object, State> = createFeatureSelector<State>('quantity');

export const selectRequestError: MemoizedSelector<object, any> = createSelector(
    selectQuantityState,
    getError
);

export const selectRequetIsLoading: MemoizedSelector<object,boolean> = createSelector(
    selectQuantityState, 
    getIsLoading
);

export const selectQuantity: MemoizedSelector<object, number[]> = createSelector(
    selectQuantityState,
    getQuantity
);