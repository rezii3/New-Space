import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CardsComponent } from './cards/cards.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CaruselComponent } from './carusel/carusel.component';
import { MainCardsComponent } from './main-cards/main-cards.component';
import { SpaceInfoComponent } from './space-info/space-info.component';


@NgModule({
  exports: [
    CardsComponent,
    CaruselComponent,
    MainCardsComponent,
    SpaceInfoComponent
  ],
  declarations: [
    CardsComponent,
    CaruselComponent,
    MainCardsComponent,
    SpaceInfoComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NzCarouselModule
  ]
})
export class SharedModule { }
