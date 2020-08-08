import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Good } from '../../interfaces/good';
import { RootStoreState, GoodsStoreSelectors, QuantityStoreSelectors, QuantityStoreActions } from '../../root-store';

@Component({
  selector: 'app-add-goods',
  templateUrl: './add-goods.component.html',
  styleUrls: ['./add-goods.component.css']
})
export class AddGoodsComponent implements OnInit {
    quantity: number[] = [];
    tempQuantity: number[] = [];
    amount: number = 1; 

    dryGoods: Good[] = [];
    frozenGoods: Good[] = [];
    coolGoods: Good[] = [];
    packingGoods: Good[] = [];
    cleaningGoods: Good[] = [];
    sideProducts: Good[] = [];
    otherProducts: Good[] = [];

    constructor( private store$: Store<RootStoreState.RootState> ) { }

    ngOnInit() {
        this.store$.select(QuantityStoreSelectors.selectQuantity)
            .subscribe(arrayData => {
                this.quantity = arrayData;
                this.tempQuantity = [...this.quantity];
            });

        this.store$.select(GoodsStoreSelectors.selectGoods).subscribe(arrayData => {
                
                this.dryGoods = arrayData.filter(objectData => objectData['category'] === "Trockensortiment");
                
                this.frozenGoods = arrayData.filter(objectData => objectData['category'] === "Tiefkühlprodukte");

                this.coolGoods = arrayData.filter(objectData => objectData['category'] === "Kühl");

                this.packingGoods = arrayData.filter(objectData => objectData['category'] === "Verpackungen");

                this.cleaningGoods = arrayData.filter(objectData => objectData['category'] === "Reinigung");

                this.sideProducts = arrayData.filter(objectData => objectData['category'] === "Sideproducts");

                this.otherProducts = arrayData.filter(objectData => objectData['category'] === "Sonstiges");
        }); 
    }

    subunitAddition(itemId) {
        this.tempQuantity[itemId - 1] = this.quantity[itemId - 1] + 1;
        this.store$.dispatch(
            new QuantityStoreActions.UpdateQuantityAction({quantityArray: this.tempQuantity})
        )
    }

    unitAddition(itemId, subunit_n) {
        this.tempQuantity[itemId - 1] = this.quantity[itemId - 1] + subunit_n;
        this.store$.dispatch(
            new QuantityStoreActions.UpdateQuantityAction({quantityArray: this.tempQuantity})
        )
    }

    addition(itemId) {
        this.tempQuantity[itemId - 1] = this.quantity[itemId - 1] + this.amount;
        this.store$.dispatch(
            new QuantityStoreActions.UpdateQuantityAction({quantityArray: this.tempQuantity})
        )
        this.amount = 1;
    }

    changeAmount($event) { 
        this.amount = parseInt($event.target.value);
    }
}
