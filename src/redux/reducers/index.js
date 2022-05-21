import {combineReducers} from 'redux';
import {imagesReducer} from './imagesReducer';
import {userReducer} from './userReducer';
import {modalReducer} from './modalReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  images: imagesReducer,
  modal: modalReducer,
});
