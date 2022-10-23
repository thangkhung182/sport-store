import { RestDataSource } from './rest.datasource';
import { ProductRepository } from './product.repository';
import { NgModule } from "@angular/core";
import { StaticDataSource } from './static.datasource';
import { Cart } from '../store/cart.model';
import {Order} from "./order.model";
import {OrderRepository} from "./order.repository";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [HttpClientModule],
    providers: [
        ProductRepository,
        StaticDataSource,
        Cart,
        Order,
        OrderRepository,
        {provide: StaticDataSource, useClass: RestDataSource}
    ]
})

export class ModelModule {}
