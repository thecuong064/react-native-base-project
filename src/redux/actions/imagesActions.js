import {ImagesActionTypes} from '../reducers/imagesReducer';

export const getImages = () => ({
  type: ApiActionTypes.GET_IMAGES,
  payload: null,
});

export const loadImagesSuccess = payload => ({
  type: ImagesActionTypes.LOAD_IMAGES_SUCCESS,
  payload: payload,
});

export const loadImagesFailed = payload => ({
  type: ImagesActionTypes.LOAD_IMAGES_FAILED,
  payload: payload,
});
