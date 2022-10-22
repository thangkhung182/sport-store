import { ProductRepository } from './product.repository';
import { NgModule } from "@angular/core";
import { StaticDataSource } from './static.datasource';

@NgModule({providers: [ProductRepository, StaticDataSource]})

export class ModelModule {}
