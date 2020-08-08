import { Action } from '@ngrx/store';
import { Good } from '../../interfaces/good';

export enum ActionTypes {
    LOAD_REQUEST = '[Inventory API] Load Request',
    REQUEST_FAILURE = '[Inventory API] Request Failure',
    REQUEST_GOODS_SUCCESS = '[Inventory API] Request Goods Success'
}

export class RequestLoadingAction implements Action {
    readonly type = ActionTypes.LOAD_REQUEST;
}

export class RequestFailureAction implements Action {
    readonly type = ActionTypes.REQUEST_FAILURE;
    constructor(public payload: { error: string }) {}
}

export class RequestGoodsSuccessAction implements Action {
    readonly type = ActionTypes.REQUEST_GOODS_SUCCESS;
    constructor(public payload: { items: Good[] }) {}
}

export type Actions = 
RequestLoadingAction | RequestFailureAction | RequestGoodsSuccessAction;