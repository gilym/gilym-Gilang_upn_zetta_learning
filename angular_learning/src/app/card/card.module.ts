import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './card/card.component';
import { ItemComponent } from './item/item.component';


@NgModule({
  declarations: [
    CardComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule
  ]
})
export class CardModule { }
