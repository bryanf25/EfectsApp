import { createReducer, on } from '@ngrx/store';
import { loadUser, loadUserError, loadUserSuccess, updateUser } from '../actions';
import { User } from '../../models/user.model';

export interface UserState {
    id: string,
    user?: User ,
    loaded: boolean,
    loading: boolean,
    error: any
}

export const userinitialState: UserState = {
    id: '',
    user: undefined,
    loaded: false,
    loading: false,
    error: null
}

export const _userReducer = createReducer(userinitialState,

    on(loadUser, (state,{id}) => ({ ...state, loading: true, id: id})),
    on(loadUserSuccess, (state, { user }) => ({
        ...state,
        loading: false,
        loaded: true,
        user: {...user}
    })),
    on(updateUser, (state, { user }) => ({
        ...state,
        user: {...user}
    })),
    on(loadUserError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),
);