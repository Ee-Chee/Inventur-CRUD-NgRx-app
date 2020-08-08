import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { Good } from '../../interfaces/good';
import { InventoryService } from '../../services/inventory.service';
import * as goodsActions from './actions';

@Injectable()
export class GoodsStoreEffects {

    constructor(private inventoryService: InventoryService, private actions$: Actions) {}

    @Effect()
    loadGoodsEffect$: Observable<Action> = this.actions$.pipe(
        ofType<goodsActions.RequestLoadingAction>(goodsActions.ActionTypes.LOAD_REQUEST),
        startWith(new goodsActions.RequestLoadingAction()),
        switchMap(() =>
            this.inventoryService.getGoods().pipe(
                map(items =>
                    new goodsActions.RequestGoodsSuccessAction({items})
                ),
                catchError(error => observableOf(new goodsActions.RequestFailureAction({error}))
                )
            )
        )
    );
}