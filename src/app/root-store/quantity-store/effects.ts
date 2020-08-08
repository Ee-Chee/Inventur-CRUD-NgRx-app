import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { InventoryService } from '../../services/inventory.service';
import * as quantityActions from './actions';

@Injectable()
export class QuantityStoreEffects {

    constructor(private inventoryService: InventoryService, private actions$: Actions) {}

    @Effect()
    loadQuantityEffect$: Observable<Action> = this.actions$.pipe(
        ofType<quantityActions.RequestLoadingAction>(quantityActions.ActionTypes.LOAD_REQUEST),
        startWith(new quantityActions.RequestLoadingAction()),
        switchMap(() =>
            this.inventoryService.getQuantity().pipe(
                map(item => {
                    return new quantityActions.RequestQuantitySuccessAction({quantityArray: item['quantity_array']});
                }),
                catchError(error => observableOf(new quantityActions.RequestFailureAction({error}))
                )
            )
        )
    );

    @Effect()
    updateQuantityEffect$: Observable<Action> = this.actions$.pipe(
        ofType<quantityActions.UpdateQuantityAction>(quantityActions.ActionTypes.UPDATE_QUANTITY),
        switchMap(action =>
            this.inventoryService.updateQuantity({quantityArray: action.payload.quantityArray}).pipe(
                map(item => {
                    return new quantityActions.UpdateQuantitySuccessAction({quantityArray: item[1]['quantity_array']})
                }),
                catchError(error =>
                    observableOf(new quantityActions.RequestFailureAction({error}))
                )
            )
        )
    );
}