import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Good } from '../../interfaces/good';
import { RootStoreState, GoodsStoreSelectors, QuantityStoreSelectors, QuantityStoreActions } from '../../root-store';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

    subunitSubstraction(itemId) {
        let itemQuantity = this.quantity[itemId - 1];
        if(itemQuantity < 1){
            window.alert("keine Ware!");
        } else {
            this.tempQuantity[itemId - 1] = itemQuantity - 1;
            this.store$.dispatch(
                new QuantityStoreActions.UpdateQuantityAction({quantityArray: this.tempQuantity})
            )
        }
    }

    unitSubstraction(itemId, subunit_n) {
        let itemQuantity = this.quantity[itemId - 1];
        if(itemQuantity < subunit_n){
            window.alert("Mangelware!");
        } else {
            this.tempQuantity[itemId - 1] = itemQuantity - subunit_n;
            this.store$.dispatch(
                new QuantityStoreActions.UpdateQuantityAction({quantityArray: this.tempQuantity})
            )
        }
    }

    substraction(itemId){
        let itemQuantity = this.quantity[itemId - 1];
        if(itemQuantity < this.amount){
            window.alert("Mangelware!");
        } else {
            this.tempQuantity[itemId - 1] = itemQuantity - this.amount;
            this.store$.dispatch(
                new QuantityStoreActions.UpdateQuantityAction({quantityArray: this.tempQuantity})
            )
        }
    }

    changeAmount($event) { 
        this.amount = parseInt($event.target.value);
    }
}

