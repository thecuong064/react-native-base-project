import {UserActionTypes} from '../reducers/userReducer';

export const changeUser = payload => ({
  type: UserActionTypes.USER_CHANGE,
  payload: payload,
});

export const clearUser = () => ({
  type: UserActionTypes.USER_CHANGE,
  payload: null,
});
