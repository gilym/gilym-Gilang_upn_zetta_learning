import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';


const routes: Routes = [

  {
    path :'kasir',
    loadChildren:()=>import('./kasir/kasir.module').then(m=> m.KasirModule),
  },
  {
    path :'employee',
    loadChildren:()=>import('./employee/employee.module').then(m=> m.EmployeeModule),
  
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
