import { Action } from '@ngrx/store';

export enum ActionTypes {
    LOAD_REQUEST = '[Inventory API] Load Request',
    REQUEST_FAILURE = '[Inventory API] Request Failure',
    REQUEST_QUANTITY_SUCCESS = '[Inventory API] Request Quantity Success',
    UPDATE_QUANTITY = '[Inventory Management] Update Quantity',
    UPDATE_QUANTITY_SUCCESS = '[Inventory API] Update Quantity Success'
}

export class RequestLoadingAction implements Action {
    readonly type = ActionTypes.LOAD_REQUEST;
}

export class RequestFailureAction implements Action {
    readonly type = ActionTypes.REQUEST_FAILURE;
    constructor(public payload: { error: string }) {}
}

export class RequestQuantitySuccessAction implements Action {
    readonly type = ActionTypes.REQUEST_QUANTITY_SUCCESS;
    constructor(public payload: { quantityArray: number[] }) {}
}

export class UpdateQuantityAction implements Action {
    readonly type = ActionTypes.UPDATE_QUANTITY;
    constructor(public payload: { quantityArray: number[] }) {}
}

export class UpdateQuantitySuccessAction implements Action {
    readonly type = ActionTypes.UPDATE_QUANTITY_SUCCESS;
    constructor(public payload: { quantityArray: number[] }) {}
}

export type Actions = 
RequestLoadingAction | RequestFailureAction | RequestQuantitySuccessAction | UpdateQuantityAction | UpdateQuantitySuccessAction;