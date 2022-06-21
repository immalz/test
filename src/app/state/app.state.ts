import { ActionReducerMap } from "@ngrx/store";
import { UserState } from "../interfaces/user.state";
import { userReducer } from "./auth.reducer";

export interface AppState {
    user: UserState;
}


export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    user: userReducer
}