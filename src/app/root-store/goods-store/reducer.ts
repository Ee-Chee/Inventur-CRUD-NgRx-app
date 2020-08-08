import { Actions, ActionTypes } from './actions';
import { goodsAdapter, initialState, State } from './state';

export function goodsReducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.LOAD_REQUEST: {
            return {
                ...state,
                isLoading: true,
                error: null
            };
        }
        case ActionTypes.REQUEST_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            };
        }
        case ActionTypes.REQUEST_GOODS_SUCCESS: {
            return goodsAdapter.addAll(action.payload.items, {
                ...state,
                isLoading: false,
                error: null
            });
        }
        default: {
            return state;
        }
    }
}