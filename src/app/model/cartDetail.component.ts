import { Component } from "@angular/core";
import { Cart } from "./cart.model";

@Component({
    templateUrl: 'cartDetail.component.html'
})

export class CartDetailComponent {
    constructor(public cart: Cart) {}
}