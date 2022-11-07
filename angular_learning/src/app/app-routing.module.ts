import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '**',
    redirectTo : 'user-management'

  },
  {
    path : 'user-management',
    loadChildren:()=>import('./user-manager/user-manager.module').then(m=> m.UserManagerModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
