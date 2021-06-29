import * as React from 'react';
import { AddToBasket } from '../common/productListHelpers/addToBasket';
import { CurrencySwitcher } from '../common/productListHelpers/currencySwitcher/CurrencySwitcher';
import { GetExchangeConversion } from '../common/productListHelpers/getExchangeConversion';
import styleMaster from '../routeScss/index.scss';
import { GetCategories } from './getCategories';
import style from './product.scss';


interface IProps{
  currency: string;
  amount: number;
  exchange: number;
  updateCurrency: any;
  updateBasket: any;
  productId: string;
  cats: string;
}
interface IStates{
  addedToBasket: boolean;
}

export default class ProductDetailActions extends React.Component<IProps, IStates>{
  constructor(props: IProps){
    super(props);
    this.state = {
      addedToBasket: false
    }
  }
  setAddedToBasket = (inValue: boolean) => {
    this.setState({addedToBasket: inValue}, () => {});
  }
  render = () => {
    const localStyle: any = { 'opacity': this.state.addedToBasket?'1':'0', 'height': this.state.addedToBasket?'500px':'0px'}
    return(
      <div id={style.productActions} className={styleMaster.clrfix}>
        <div className={style.addedTo} style={localStyle}><p>Added to basket</p></div>
        <div className={style.totals}>
          <GetExchangeConversion nodeStyle={style.price} currency={this.props.currency} amount={this.props.amount} exchange={this.props.exchange} />
        </div>
        <div className={style.currency}>
          <CurrencySwitcher currentCurrancy={this.props.currency} updateCurrency={this.props.updateCurrency} />
        </div>
        <div className={style.addto}>
          <AddToBasket productId={this.props.productId} updateBasket={this.props.updateBasket} setAddedToBasket={this.setAddedToBasket}/>
        </div>
        <div>
          <GetCategories cats={this.props.cats}/>
        </div>
      </div>
    )
  }
}