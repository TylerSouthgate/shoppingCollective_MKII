import axios from 'axios';
import { API_CURRENCY_CONVERTER, API_CURRENCY_CONVERTER_EXCHANGE_RATES, API_KEY, API_KEY_FREE } from '../config/constants';

export const getFromToConvertion = (from:string, to:string, amount:string) => {
	let finalUrl = API_CURRENCY_CONVERTER.replace(':api_key', API_CURRENCY_CONVERTER).replace(':from', from).replace(':to', to).replace(':amount', amount);
  return axios.get(finalUrl);
}
export const getExchangeRate = (base:string,to:string) => {
	let finalUrl = API_CURRENCY_CONVERTER_EXCHANGE_RATES.replace(':api_key', API_KEY_FREE).replace(':conversion', base+'_'+to);
  return axios.get(finalUrl);
}
