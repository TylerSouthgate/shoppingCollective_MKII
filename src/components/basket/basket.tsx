import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import { MastHead } from '../common/mastHead/mastHead';
import { IAppState } from '../redux/reducers/initialState';
import BasketList from './basketList/BasketList';
import masterStyle from '../routeScss/index.scss';
import BasketActions from './basketActions'
import style from './basket.scss';
import { updateBasket, updateCurrency, updateExchange } from '../redux/actions/dDataActions';
import { ROUTE_SHOP } from '../../config/constants';
import { BackButton } from '../common/backbutton/backButton';
const apis = require('../../API/thirdparty_api')

interface IProps{
  auth: IAppState;
  dispatch: Dispatch<IAppState>;
}
interface IStates{

}

class BasketPage extends React.Component<IProps, IStates>{
  constructor(props: IProps){
    super(props);
    this.state = {

    }
  }
  removeBasketItem = (inValue: string) => {
    console.log('removeBasketItem: ', inValue)
    let currentBasketList: any = this.props.auth.auth.basket;
    for( var i = 0; i < currentBasketList.length; i++){ 
      if ( currentBasketList[i]['item'] == inValue) { 
        currentBasketList.splice(i, 1); 
      }
    }
    this.props.dispatch(updateBasket(currentBasketList));
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
      <section className={style.basket}>
        <div className={masterStyle.pageTemplate}>
          <MastHead title={'What\'s in the bag?'} />
          <BackButton />
          <div className={masterStyle.clrfix}>
          {this.props.auth.auth.basket<=0?
            <div className={style.empty}>
              <h3>Its empty!</h3>
              <p>Your basket is totally empty! Which from our point of view is a really bad thing.</p>
              <p>Go on, do a good thing and <a href={ROUTE_SHOP}>add some stuff</a></p>
            </div>
          :
            <>
              <div className={style.left}>
                <BasketList 
                  data={this.props.auth.auth.basket}
                  currency={this.props.auth.auth.currency}
                  exchange={this.props.auth.auth.exchange}
                  removeBasketItem={this.removeBasketItem}
                />
              </div>
              <div className={style.right}>
                <BasketActions 
                  data={this.props.auth.auth.basket}
                  currency={this.props.auth.auth.currency}
                  exchange={this.props.auth.auth.exchange}
                  updateCurrency={this.updateCurrency}
                />
              </div>
            </>
          }
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state:IAppState) {
  return { auth : state }
}
export default withRouter(connect(mapStateToProps)(BasketPage) as any);