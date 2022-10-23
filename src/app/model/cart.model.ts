import { Product } from 'src/app/model/product.model';
import { HostListener, Injectable } from "@angular/core";

@Injectable()
export class Cart {
    public lines: CartLine[] = []
    public itemCount: number = 0
    public cartPrice: number = 0

    addLine(product: Product, quantity: number = 1) {
        let line = this.getLine(product)
        if (line != undefined) {
            line.quantity += quantity
        } else {
            this.lines.push(new CartLine(product, quantity))
        }

        this.recalculate()
    }


    updateQuantity(product: Product, quantity: number) {
        let line = this.getLine(product)
        if (line != undefined) {
            line.quantity = quantity
        }

        this.recalculate()
    }

    removeLine(id: number) {
        let index = this.lines.findIndex(line => line.product.id == id)
        this.lines.splice(index, 1)
        this.recalculate()
    }

    clear() {
        this.lines = []
        this.itemCount = 0
        this.cartPrice = 0
    }

    private recalculate() {
        this.itemCount = 0
        this.cartPrice = 0
        this.lines.forEach(l => {
            this.itemCount += l.quantity
            this.cartPrice = l.lineTotal
        })
    }

    private getLine(product: Product): CartLine | undefined {
        return this.lines.find(line => line.product.id == product.id)
    } 

}

export class CartLine {
    constructor(public product: Product, public quantity: number) {

    }

    get lineTotal() {
        return this.quantity * (this.product.price ?? 0)
    }
}