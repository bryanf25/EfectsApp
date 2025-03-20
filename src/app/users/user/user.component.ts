import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadUser } from '../../store/actions';
import { AppState } from '../../app.reducers';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  user!: User;
  loading: boolean = false;
  error: any;



  router = inject(ActivatedRoute);
  store = inject(Store<AppState>)

  ngOnInit(): void {
    this.store.select('user').subscribe( ({user,loading,error}) => {
      this.loading= loading;
      this.user = user;
      this.error = error
    })  
    this.router.params.subscribe(({ id }) => {
      this.store.dispatch(loadUser({ id: id }))
    })
  }

}
