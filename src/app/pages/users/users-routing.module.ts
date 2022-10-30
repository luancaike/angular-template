import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent,
    data: {
      breadcrumb: null,
    },
  },
  {
    path: 'add',
    component: UsersFormComponent,
    data: {
      breadcrumb: 'Add Users',
    },
  },
  {
    path: 'edit/:id',
    component: UsersFormComponent,
    data: {
      breadcrumb: 'Edit Users',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
