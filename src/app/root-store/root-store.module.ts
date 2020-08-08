import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GoodsStoreModule } from './goods-store/goods-store.module';
import { QuantityStoreModule } from './quantity-store/quantity-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GoodsStoreModule,
    QuantityStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule { }
