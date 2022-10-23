import { RouterModule } from '@angular/router';
import { CartDetailComponent } from './../app/model/cartDetail.component';
import { ModelModule } from './../app/model/model.module';
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreComponent } from './store.component';
import { CounterDirective } from './../util/counter.directive';
import { CartSummaryComponent } from 'src/app/model/cartSummary.component';
import { CheckoutComponent } from 'src/app/model/checkout.component';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [
        StoreComponent, 
        CounterDirective, 
        CartSummaryComponent,
        CartDetailComponent,
        CheckoutComponent
    ],
    exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})

export class StoreModule {}