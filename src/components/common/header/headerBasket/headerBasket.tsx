import * as React from 'react';
import style from '../header.scss';
import { AiOutlineShoppingCart, AiOutlineClear } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { ROUTE_BASKET } from '../../../../config/constants';

type ITypes = {
  emptyBasket: any;
  basketNumber: any;
}

export const Basket = ({emptyBasket, basketNumber}: ITypes) => {
  return(
    <div id={style.basket}>
      <p className={style.basketText}><span onClick={()=>{emptyBasket()}}><AiOutlineClear />Empty Basket</span> | <span><AiOutlineShoppingCart /> {basketNumber} - <Link to={ROUTE_BASKET}>View basket</Link></span></p>
    </div>
  )
}