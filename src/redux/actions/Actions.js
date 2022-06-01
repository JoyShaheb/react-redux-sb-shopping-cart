import { ActionTypes } from "../constants/ActionTypes";

let { GET_ALL_PRODUCTS, GET_DETAILS_OF_A_SINGLE_PRODUCT } = ActionTypes;

export let get_All_Products = (products) => {
  return {
    type: GET_ALL_PRODUCTS,
    payload: products,
  };
};

export let get_Details_of_a_signgle_product = (products) => {
  return {
    type: GET_DETAILS_OF_A_SINGLE_PRODUCT,
    payload: products,
  };
};
