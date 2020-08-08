import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function quantityReducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.LOAD_REQUEST: 
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case ActionTypes.REQUEST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            };
        case ActionTypes.REQUEST_QUANTITY_SUCCESS:
            return {
                ...state,
                quantityArray: action.payload.quantityArray,
                isLoading: false,
                error: null
            };
        case ActionTypes.UPDATE_QUANTITY:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case ActionTypes.UPDATE_QUANTITY_SUCCESS:
            return {
                ...state,
                quantityArray: action.payload.quantityArray,
                isLoading: false,
                error: null
            };
        default: {
            return state;
        }
    }
}