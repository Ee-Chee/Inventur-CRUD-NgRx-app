import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { QuantityStoreEffects } from './effects';
import { quantityReducer } from './reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('quantity', quantityReducer),
        EffectsModule.forFeature([QuantityStoreEffects])
    ],
    providers: [QuantityStoreEffects]
})
export class QuantityStoreModule { }
