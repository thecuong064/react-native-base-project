export const UserActionTypes = {
  USER_CHANGE: 'common/user_change',
};

const initalUser = {
  name: '',
  pass: '',
};

export const userReducer = (state = initalUser, action) => {
  const {payload, type} = action;

  switch (type) {
    case UserActionTypes.USER_CHANGE: {
      return payload;
    }
    default:
      return state;
  }
};
