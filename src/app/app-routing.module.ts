import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesEditComponent } from './component/employees-edit/employees-edit.component';
import { EmployeesAddComponent } from './component/employees-add/employees-add.component';
import { EmployeesListComponent } from './component/employees-list/employees-list.component';

const routes: Routes = [
  {
    path: 'edit/:id',
    component: EmployeesEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
