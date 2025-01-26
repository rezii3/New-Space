import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { FoodComponent } from './food/food.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    FoodComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule
]
})
export class MenuModule { }
