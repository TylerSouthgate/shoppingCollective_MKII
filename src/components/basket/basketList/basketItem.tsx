import * as React from 'react';
import { AddToBasket } from '../../common/productListHelpers/addToBasket';
import { GetExchangeConversion } from '../../common/productListHelpers/getExchangeConversion';
import { GetFirstImage } from '../../common/productListHelpers/getFirstImage';
import { RemoveFromBasket } from '../../common/productListHelpers/removeFromBasket';
import masterStyle from '../../routeScss/index.scss';
import style from '../basket.scss';

type ITypes = {
  product: any,
  currency: string,
  exchange: number,
  removeBasketItem: any
}

export const BasketItem = ({product, currency, exchange, removeBasketItem}: ITypes) => {
  return(
    <div className={masterStyle.clrfix}>
      <div className={style.image}>
        <GetFirstImage data={product['imageURLs']} usage={'BASKET'}/>
      </div>
      <div className={style.data}>
        <p>{product['name']}</p>
        <GetExchangeConversion nodeStyle={style.price} currency={currency} amount={parseInt(product['prices.amountMin'])} exchange={exchange} />
        <RemoveFromBasket productId={product['id']} removeBasketItem={removeBasketItem}/>
      </div>
    </div>
  )
}