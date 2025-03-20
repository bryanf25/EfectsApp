import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersError, loadUsersSuccess } from '../actions';
import { User } from '../../models/user.model';

export interface UsersState {
    users: User[],
    loaded: boolean,
    loading: boolean,
    error: any
}

export const usersinitialState: UsersState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
}

export const _usersReducer = createReducer(usersinitialState,

    on(loadUsers, state => ({ ...state, loading: true })),
    on(loadUsersSuccess, (state, { users }) => ({
        ...state,
        loading: false,
        loaded: true,
        users: [...users]
    })),
    on(loadUsersError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    }))
);