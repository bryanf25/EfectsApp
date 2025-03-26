import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ListComponent,
    UserComponent
  ]
})
export class UsersModule { }
