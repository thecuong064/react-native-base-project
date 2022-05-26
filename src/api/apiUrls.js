export const API_END_POINTS = {
  getUsers: () => {
    return '/users';
  },
  getUser: id => {
    return `/users/${id}`;
  },
  getPhotos: () => {
    return `/photos`;
  },
  getPosts: params => {
    return `/posts`;
  },
};
