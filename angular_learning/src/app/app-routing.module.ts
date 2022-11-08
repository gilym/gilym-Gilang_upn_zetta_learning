import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './user-manager/list/list.component';

const routes: Routes = [
  
  {
    path : 'create',
    loadChildren:()=>import('./user-manager/user-manager.module').then(m=> m.UserManagerModule),
  },
  {
    path: 'list',
    component : ListComponent
    
  },
  {
    path : '**',
    redirectTo : 'list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
