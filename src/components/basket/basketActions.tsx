import * as React from 'react';
import { DATA_SET } from '../../config/dataset';
import { CurrencySwitcher } from '../common/productListHelpers/currencySwitcher/CurrencySwitcher';
import { GetExchangeConversion } from '../common/productListHelpers/getExchangeConversion';
import style from './basket.scss';

interface IProps{
  data: Array<any>;
  currency: string;
  exchange: number;
  updateCurrency: any;
}
interface IStates{
  productList: any;
}

export default class BasketActions extends React.Component<IProps, IStates>{
  constructor(props: IProps){
    super(props);
    this.state ={
      productList: DATA_SET
    }
  }
  getTotal = () => {
    let total: number = 0;
    for (var i=0;i<this.props.data.length;i++){
      let thisNode: any = this.props.data[i];
      for (var p=0;p<this.state.productList.length;p++){
        let thisProduct: any = this.state.productList[p];
        if(thisNode['item']==thisProduct['id']){
          total=total+parseInt(thisProduct['prices.amountMin'])
        }
      }
    }
    return total;
  }
  render = () => {
    return(
      <div id={style.basketActions}>
        <div className={style.totals}>
          <p><b>{this.props.data.length}</b> {this.props.data.length>1?'items in your basket':'item in your basket'}</p>
          <p className={style.total}>Total:</p>
          <GetExchangeConversion nodeStyle={style.price} currency={this.props.currency} amount={this.getTotal()} exchange={this.props.exchange} />
        </div>
        <div className={style.currency}>
          <CurrencySwitcher currentCurrancy={this.props.currency} updateCurrency={this.props.updateCurrency} type={'SELECT'} />
        </div>
      </div>
    )
  }
}