import * as actionType from "./actionType";

export const Promotions = (
  state = {
    isLoading: true,
    errMess: null,
    promotions: [],
  },
  action
) => {
  switch (action.type) {
    case actionType.ADD_PROMOS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        promotions: action.payload,
      };
    case actionType.PROMOS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        promotions: [],
      };
    case actionType.PROMOS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        promotions: [],
      };
    default: {
      return state;
    }
  }
};
