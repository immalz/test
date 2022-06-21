import { createAction, props } from '@ngrx/store';
import { User } from '../interfaces/user';


 
export const loginRequest = createAction(
  '[Auth] Login Request',
);

export const loginSuccess = createAction(
    '[Auth] Login Success',
    props<{ credentials: User }>()
  );


  export const loginFailure = createAction(
    '[Auth] Login Failure',
    props<{ error: string }>()
  );