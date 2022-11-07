import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagerRoutingModule } from './user-manager-routing.module';

import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';


import {ReactiveFormsModule} from '@angular/forms';
import { DetailComponent } from './detail/detail.component'


@NgModule({
  declarations: [
   
    CreateComponent,
    ListComponent,
    EditComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    UserManagerRoutingModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class UserManagerModule { }
