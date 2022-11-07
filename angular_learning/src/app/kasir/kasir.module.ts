import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KasirRoutingModule } from './kasir-routing.module';
import { KasirComponent } from './kasir/kasir.component';
import { MenuComponent } from './menu/menu.component';
import { PaymentComponent } from './payment/payment.component';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    KasirComponent,
    MenuComponent,
    PaymentComponent,
 
    
  ],
  imports: [
    CommonModule,
    KasirRoutingModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class KasirModule { }
