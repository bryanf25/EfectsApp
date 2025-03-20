import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from "../../services/user.service";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
import * as userActions from "../actions"
import { of } from "rxjs/internal/observable/of";
import { User } from "../../models/user.model";

@Injectable()
export class UserEffects {
    
    private actions$ = inject(Actions);
    private userService$ = inject(UserService);
  
    loadUser$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(userActions.loadUser),
        //   second effect, it doesn't have any impact in the steam data
          tap((data)=> console.log('effect tap ', data)),
          exhaustMap((action) => 
             this.userService$.getUserById(action.id)
            .pipe(
                map( (response: any) => userActions.loadUserSuccess({user : response.data as User})),
                catchError((error)=> {
                    return of(userActions.loadUserError({payload:error}))
                })
            )
          ) 
      );
    });
}
