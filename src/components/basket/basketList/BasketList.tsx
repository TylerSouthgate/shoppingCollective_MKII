import * as React from 'react';
import { DATA_SET } from '../../../config/dataset';
import { BasketItem } from './basketItem';
import style from '../basket.scss';
import { ROUTE_SHOP } from '../../../config/constants';

interface IProps{
  data: Array<any>;
  currency: string;
  exchange: number;
  removeBasketItem: any;
}
interface IStates{
  productList: Array<any>
}

export default class BasketList extends React.Component<IProps, IStates>{
  constructor(props:IProps){
    super(props);
    this.state = {
      productList: DATA_SET
    }
  }
  render = () => {
    
      return(
        <>
          {Object.keys(this.props.data).map((key: any)=>{
            let thisNode: any = this.props.data[key];
            return(
              Object.keys(this.state.productList).map((p_key: any)=>{
                let thisProduct: any = this.state.productList[p_key];
                if(thisProduct['id']==thisNode['item']){
                  return(
                    <div key={key+p_key} id={style.basketItem}>
                      <BasketItem 
                        product={thisProduct} 
                        currency={this.props.currency}
                        exchange={this.props.exchange}
                        removeBasketItem={this.props.removeBasketItem}
                      />
                    </div>
                  )
                }
              })
            )
          })}
        </>
      )
    
  }
}