import { UPDATE_BASKET, UPDATE_CURRENCY, UPDATE_EXCHANGE } from "../actions/actionTypes";

export function authReducer(state = {}, action: any) {
  switch (action.type) {
    case UPDATE_CURRENCY:
      return {
        ...state,
        currency : action.payload
      };
    case UPDATE_BASKET:
      return {
        ...state,
        basket : action.payload
      };
    case UPDATE_EXCHANGE:
      return {
        ...state,
        exchange : action.payload
      };
    default:
      return state;
  }
}