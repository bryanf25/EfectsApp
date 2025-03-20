import { ActionReducerMap } from '@ngrx/store';
import * as reducer from './store/reducers';


export interface AppState {
   users: reducer.UsersState,
   user: reducer.UserState
}



export const appReducers: ActionReducerMap<AppState> = {
   users: reducer._usersReducer,
   user: reducer._userReducer
}