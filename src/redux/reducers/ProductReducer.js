import { ActionTypes } from "../constants/ActionTypes";
let { GET_ALL_PRODUCTS, GET_DETAILS_OF_A_SINGLE_PRODUCT } = ActionTypes;

let initailState = {
  All_Products: [],
  details_of_a_single_product: [],
  cart: [],
};

export let productReducer = (state = initailState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PRODUCTS:
      return { ...state, All_Products: payload };
    case GET_DETAILS_OF_A_SINGLE_PRODUCT:
      return { ...state, payload };
    default:
      return state;
  }
};
