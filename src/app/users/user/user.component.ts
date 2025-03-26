import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadUser, updateUser } from '../../store/actions';
import { AppState } from '../../app.reducers';
import { User } from '../../models/user.model';
import Swal from 'sweetalert2'
import { filter } from 'rxjs';


@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  user!: User;
  loading: boolean = true;
  error: any;
  isEditingEmail: boolean = false
  originalEmail : string  = ''



  router = inject(ActivatedRoute);
  store = inject(Store<AppState>)

  ngOnInit(): void {
    this.store.select('user').pipe(
      filter( ({user}) => user != undefined)
    ).subscribe( ({user,loading,error}) => {
      this.loading = loading;
      this.user = {...user};
      this.error = error

      if(this.hasEmailChanged()){
        this.originalEmail = user.email
      }

    })  
    this.router.params.subscribe(({ id }) => {
      this.store.dispatch(loadUser({ id: id }))
    })
  }

  toggleEditEmail(){
    this.isEditingEmail = !this.isEditingEmail
  }

  hasEmailChanged(){
    return this.user.email !== this.originalEmail
  }

  savechanges(){
    if(this.hasEmailChanged()){
      this.store.dispatch(updateUser({user: this.user}))
      Swal.fire({
        title: "Good job!",
        text: "User updated!",
        icon: "success"
      });
    }
    else{
      Swal.fire({
        title: "Without Changes!",
        text: "please make some some change to the email!",
        icon: "info"
      });
    }
  }

}
