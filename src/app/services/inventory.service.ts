import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Good } from 'src/app/interfaces/good';

const baseUrl = 'https://eat-happy-inventur-api.herokuapp.com/api/inventory';

@Injectable({
    providedIn: 'root'
})

export class InventoryService {

    constructor(private http: HttpClient) { }
    
    getQuantity() {
        return this.http.get(`${baseUrl}/amountid5`);
    }

    getGoods() {
        return this.http.get<Good[]>(`${baseUrl}/goods`);
    }

    updateQuantity(data) {
        return this.http.post(`${baseUrl}/changeAmountid5`, data);
    }

}