import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { GoodsStoreEffects } from './effects';
import { goodsReducer } from './reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('goods',  goodsReducer),
        EffectsModule.forFeature([GoodsStoreEffects])
    ],
    providers: [GoodsStoreEffects]
})
export class GoodsStoreModule { }
