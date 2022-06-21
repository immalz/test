import { createReducer, on } from "@ngrx/store";
import { User } from "../interfaces/user";
import { UserState } from "../interfaces/user.state";
import { loginRequest, loginSuccess } from "./auth.actions";


export const initialState: UserState = {
    loading: false,
    user: {username: '', password:''}
}

export const userReducer = createReducer(
    initialState,
    on(loginRequest, (state) => {
        return {
            ...state, loading: true,
        }
    }),
    on(loginSuccess, (state, props) => {
        
        const {credentials} = props;
        console.log(credentials)
        return {
            ...state, user: credentials,
        }
    })
)