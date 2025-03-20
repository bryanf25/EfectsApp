import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { loadUsers } from '../../store/actions';
import { filter } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  users: User[] = []
  loading: boolean = false;
  error: any
  store = inject(Store<AppState>)

  // constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.store.select('users').subscribe(({ users, loading, error }) => {
      this.users = users;
      this.loading = loading;
      this.error = error;
    }
    )
    this.store.dispatch(loadUsers())
  }
}
