export const ROUTE_HOME: string = '/';
export const ROUTE_ABOUT: string = '/about';
export const ROUTE_CONTACT: string = '/contact';
export const ROUTE_BASKET: string = '/shop/basket';
export const ROUTE_SHOP: string = '/shop';
export const ROUTE_PRODUCT: string = '/shop/product';

export const API_KEY: string = '07485b343e53b38a0c7ff1652f4ffaa4';
export const API_KEY_FREE: string = '3c0f4086174dffb024e3';
export const API_CURRENCY_CONVERTER : string = 'http://api.exchangeratesapi.io/v1/convert?access_key=:api_key&from=:from&to=:to&amount=:amount';
//export const API_CURRENCY_CONVERTER_EXCHANGE_RATES : string = 'http://api.exchangeratesapi.io/v1/latest?access_key=:api_key';
export const API_CURRENCY_CONVERTER_EXCHANGE_RATES : string = 'https://free.currconv.com/api/v7/convert?q=:conversion&compact=ultra&apiKey=:api_key';
//export const EXCHANGE_URI_IDENT_DASHBOARD = "/api/exchange/agg/:orgId/:fromDate/:binSize';
export const NAVIGATION: Array<any> = [{
  "naviItems":[{
    "label":"Home",
    "link":`${ROUTE_HOME}`,
    "type":"PRIMARY"
  },
  {
    "label":"Shop",
    "link":`${ROUTE_SHOP}`,
    "type":"PRIMARY"
  },
  {
    "label":"Product",
    "link":`${ROUTE_PRODUCT}`,
    "type":"SECONDARY"
  },
  {
    "label":"Contact",
    "link":`${ROUTE_CONTACT}`,
    "type":"PRIMARY"
  },
  {
    "label":"About",
    "link":`${ROUTE_ABOUT}`,
    "type":"PRIMARY"
  },
  {
    "label":"Basket",
    "link":`${ROUTE_BASKET}`,
    "type":"SUPPORT"
  }]
}]