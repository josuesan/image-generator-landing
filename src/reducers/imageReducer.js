import { types } from '../types/types';

// eslint-disable-next-line import/prefer-default-export
export const imageReducer = (state = {}, action) => {
  switch (action.type) {
    case types.createImage:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
