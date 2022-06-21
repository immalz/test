import { UserState } from './../interfaces/user.state';
import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectUserFeature = (state: AppState) => state.user;

export const selectUserInfo = createSelector(
    selectUserFeature,
    (state: UserState) => state.user
)