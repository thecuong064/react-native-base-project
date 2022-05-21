export const ImagesActionTypes = {
  GET_IMAGES: 'images/get_images',
  LOAD_IMAGES_SUCCESS: 'images/load_images_success',
  LOAD_IMAGES_FAILED: 'images/load_images_failed',
};

const initalImages = {
  data: [],
  error: undefined,
};

export const imagesReducer = (state = initalImages, action) => {
  const {payload, type} = action;

  console.log(type);

  switch (type) {
    case ImagesActionTypes.LOAD_IMAGES_SUCCESS: {
      return {
        data: payload,
        error: null,
      };
    }
    case ImagesActionTypes.LOAD_IMAGES_FAILED: {
      return {
        data: [],
        error: payload,
      };
    }
    default:
      return state;
  }
};
