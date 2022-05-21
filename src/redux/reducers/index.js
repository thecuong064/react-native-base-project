import {combineReducers} from 'redux';
import {imagesReducer} from './imagesReducer';
import {userReducer} from './userReducer';
import {modalReducer} from './modalReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import {persistReducer} from 'redux-persist';

const imagesPersistConfig = {
  key: '@redux-persist/images',
  storage: AsyncStorage,
  whitelist: ['data'],
  stateReconciler: hardSet,
};

export const rootReducer = combineReducers({
  user: userReducer,
  images: persistReducer(imagesPersistConfig, imagesReducer),
  modal: modalReducer,
});
