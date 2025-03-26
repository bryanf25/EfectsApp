import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './users/list/list.component';
import { UserComponent } from './users/user/user.component';
import { preventLeaveGuard } from './guards/prevent-leave.guard';

const routes: Routes = [
  {
    path: 'home',
    component: ListComponent
  },
  {
    path: 'user/:id',
    component: UserComponent,
    canDeactivate: [preventLeaveGuard]
  },
  {
    path: '**',
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
