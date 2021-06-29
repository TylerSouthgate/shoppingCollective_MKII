import * as React from 'react';
import { AddToBasket } from '../../common/productListHelpers/addToBasket';
import { GetFirstImage } from '../../common/productListHelpers/getFirstImage';
import { GetExchangeConversion } from '../../common/productListHelpers/getExchangeConversion';
import style from '../shop.scss'
import { useHistory } from 'react-router-dom';
import { ROUTE_PRODUCT } from '../../../config/constants';

type ITypes = {
  data: any;
  updateBasket: any;
  currency: string;
  exchange: number;
}

export const ShopItem = ({data, updateBasket, currency, exchange }: ITypes) => {
  const [addedToBasket, setAddedToBasket] = React.useState(false);
  const [thisHistory] = React.useState(useHistory());
  const localStyle: any = { 'opacity': addedToBasket?'1':'0', 'height': addedToBasket?'100vh':'0px'}
  const gotoProduct = (inValue: string) => {
    thisHistory.push(ROUTE_PRODUCT+'?p='+inValue);
  } 
  return(
    <div id={style.shopListItem}>
      <div onClick={()=>{gotoProduct(data['id'])}}>
        <div className={style.addedTo} style={localStyle}><p>Added to basket</p></div>
        {/*<p>{data['id']}</p>*/}
        <GetFirstImage data={data['imageURLs']} usage={'SHOP'}/>
        <p>{data['name'].length>40?data['name'].substring(0,40)+'...':data['name']}</p>
        <GetExchangeConversion nodeStyle={style.price} currency={currency} amount={parseInt(data['prices.amountMin'])} exchange={exchange} />
      </div>
      <AddToBasket productId={data['id']} updateBasket={updateBasket} setAddedToBasket={setAddedToBasket}/>
    </div>
  )  
}
 