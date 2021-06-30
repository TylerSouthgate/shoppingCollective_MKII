
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import { DATA_SET } from '../../config/dataset';
import { MastHead } from '../common/mastHead/mastHead';
import { updateBasket, updateCurrency, updateExchange } from '../redux/actions/dDataActions';
import { IAppState } from '../redux/reducers/initialState';
import BuildShopList from './shopList/buildShopList';
import { CurrencySwitcher } from '../common/productListHelpers/currencySwitcher/CurrencySwitcher';
import style from './shop.scss';
import masterStyle from '../routeScss/index.scss'

const apis = require('../../API/thirdparty_api')

interface IProps{
  auth: IAppState;
  dispatch: Dispatch<IAppState>;
}

interface IStates{
  shopList: any;
}



class ShopPage extends React.Component<IProps, IStates>{
  constructor(props: IProps){
    super(props);
    this.state = {
      shopList: DATA_SET,
    }
  }
  updateBasket = (inValue: string) => {
    let localList: Array<any> = this.props.auth.auth['basket'];
    let newNode: any = new Object;
    newNode['item']=inValue;
    try{
      localList.push(newNode);
      this.props.dispatch(updateBasket(localList));
    }
    catch{
      console.log('bugger!');
    }
  }
  emptyBasket = () => {
    this.props.dispatch(updateBasket([]));
  }
  updateCurrency = (inValue: string) => {
    this.props.dispatch(updateCurrency(inValue))
    this.popData(inValue);
  }
  popData = (inValue: string) => {
    apis.getExchangeRate('GBP', inValue).then((res: any)=>{
      let thisKey: string = 'GBP_'+inValue;
      this.props.dispatch(updateExchange(res['data'][thisKey]))
      console.log('RES: ', res['data'][thisKey])
    });
  }
  render = () => {
    return(
      <section className={masterStyle.pageTemplate}>
        <MastHead title={'All the stuff to buy!'} hookLine={'Sed finibus justo quis tortor ultrices finibus. Duis suscipit fringilla erat eu feugiat. Phasellus porta ipsum risus, sit amet pharetra purus vehicula nec.'} />
        <div><CurrencySwitcher currentCurrancy={this.props.auth.auth.currency} updateCurrency={this.updateCurrency}  type={'SELECT'} /></div>
        <div>
          <BuildShopList 
            data={this.state.shopList} 
            updateBasket={this.updateBasket} 
            currency={this.props.auth.auth.currency} 
            exchange={this.props.auth.auth.exchange} 
          />  
        </div>
      </section>
    )
  }
}

function mapStateToProps(state:IAppState) {
  return { auth : state }
}
export default withRouter(connect(mapStateToProps)(ShopPage) as any);