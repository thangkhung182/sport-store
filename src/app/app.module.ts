import { StoreFirstGuard } from './storeFirst.guard';
import { CheckoutComponent } from './store/checkout.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { StoreComponent } from './store/store.component';
import { StoreModule } from './store/store.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {path: "store", component: StoreComponent, canActivate: [StoreFirstGuard]},
      {path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard]},
      {path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard]},
      {path: "**", redirectTo: "/store"}
    ])
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
