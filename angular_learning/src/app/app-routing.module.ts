import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './card/item/item.component';

const routes: Routes = [

  {
    path: 'card',
    loadChildren :()=> import('./card/card.module').then(m=>m.CardModule)
  },
  
  {
    path: 'api',
    component:ItemComponent
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
