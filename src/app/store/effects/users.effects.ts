import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from "../../services/user.service";
import { catchError, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import * as userActions from "../actions/users.actions"
import { of } from "rxjs/internal/observable/of";

@Injectable()
export class UsersEffects {
    
    private actions$ = inject(Actions);
    private userService$ = inject(UserService);
  
    loadUsers$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(userActions.loadUsers),
        //   second effect, it doesn't have any impact in the steam data
        //   tap((data)=> console.log('effect tap ', data)),
          mergeMap(() => 
             this.userService$.getUsers()
            .pipe(
                map( users => userActions.loadUsersSuccess({users : users})),
                catchError((error)=> {
                    return of(userActions.loadUsersError({payload:error}))
                })
            )
          ) 
      );
    });
}
