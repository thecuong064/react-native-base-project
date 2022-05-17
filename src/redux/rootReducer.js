import {combineReducers} from 'redux';
import userReducer from './common/reducer';
import imagesReducer from './ApiPracties/reducer';
import {modalReducer} from './reducers/modalReducer';

const rootReducer = combineReducers({
  user: userReducer,
  images: imagesReducer,
  modal: modalReducer,
});

export default rootReducer;
