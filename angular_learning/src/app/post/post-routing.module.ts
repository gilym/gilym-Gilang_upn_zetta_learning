import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {
    path :'list',
    pathMatch:'full',
    component:ListComponent
  
  },
  {
    path: '**' ,
    pathMatch:'full',
   redirectTo : 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
