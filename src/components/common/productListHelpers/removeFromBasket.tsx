import * as React from 'react';
import style from './removeFromBasket.scss'

type ITypes={
  productId: string,
  removeBasketItem: any
}

export const RemoveFromBasket = ({productId, removeBasketItem}: ITypes) => {
  return(
    <><small className={style.remove} onClick={()=>{removeBasketItem(productId)}}>Remove</small></>
  )
}