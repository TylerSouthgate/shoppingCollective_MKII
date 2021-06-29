import { UPDATE_CURRENCY, UPDATE_BASKET, UPDATE_EXCHANGE } from './actionTypes';

export const updateCurrency = (newCurrency: string) => ({
  type: UPDATE_CURRENCY,
  payload: newCurrency
}) 
export const updateBasket = (newBasket: any) => ({
  type: UPDATE_BASKET,
  payload: newBasket
})
export const updateExchange = (newExchange: any) => ({
  type: UPDATE_EXCHANGE,
  payload: newExchange
})
