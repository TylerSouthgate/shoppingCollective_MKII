import * as React from 'react';
import { ShopItem } from './shopItem';
import style from '../shop.scss'

interface IProps{
  data: Array<any>;
  updateBasket: any;
  currency: string;
  exchange: number;
}

export default class BuildShopList extends React.Component<IProps>{
  constructor(props: IProps){
    super(props)
  }
  render = () => {
    return(
      <div id={style.shopListCont}>
        {Object.keys(this.props.data).map((key: any)=>{
          let thisNode: any = this.props.data[key];
          return(
            <div key={'shopItem'+key}>
              <ShopItem 
                data={thisNode} 
                updateBasket={this.props.updateBasket} 
                currency={this.props.currency}
                exchange={this.props.exchange}
              />
            </div>
          )
        })}
      </div>
    )
  }
}