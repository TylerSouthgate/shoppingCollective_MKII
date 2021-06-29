import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import { DATA_SET } from '../../config/dataset';
import { BackButton } from '../common/backbutton/backButton';
import { MastHead } from '../common/mastHead/mastHead';
import { updateBasket, updateCurrency, updateExchange } from '../redux/actions/dDataActions';
import { IAppState } from '../redux/reducers/initialState';
import masterStyle from '../routeScss/index.scss'
import style from './product.scss';
import ProductDetails from './productDetails';

const apis = require('../../API/thirdparty_api')

interface IProps{
  auth: IAppState;
  dispatch: Dispatch<IAppState>;
}
interface IStates{
  productList: Array<any>;
  thisProduct: string;
}

class ProductPage extends React.Component<IProps, IStates>{
  constructor(props: IProps){
    super(props);
    this.state = {
      thisProduct: '',
      productList: DATA_SET
    }
  }
  componentDidMount = () => {
    if(typeof window !== 'undefined'){
      let query = new URLSearchParams(window.location.search);
      if (query.get('p')!=null){
        this.setState({thisProduct: query.get('p')}, () => {});
      }
    }
  }
  getProduct = () => {
    let selectedProduct: Array<any>;
    for(var i=0;i<this.state.productList.length;i++){
      let thisProductNode: any = this.state.productList[i];
      if (this.state.productList[i]['id']==this.state.thisProduct){
        selectedProduct=this.state.productList[i];
      }
    }
    return selectedProduct;
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
  updateBasket = (inValue: string) => {
    let localList: Array<any> = this.props.auth.auth['basket'];
    let newNode: any = {};
    newNode['item']=inValue;
    localList.push(newNode);
    this.props.dispatch(updateBasket(localList));
  }
  render = () => {
    return(
      <section id={style.productPage} className={masterStyle.pageTemplate}>
        <MastHead title={'Lets take a closer look at that...'} />
        <BackButton />
        <ProductDetails 
          product={this.getProduct()}
          currency={this.props.auth.auth.currency}
          exchange={this.props.auth.auth.exchange}
          updateCurrency={this.updateCurrency}
          updateBasket={this.updateBasket}
        />
      </section>
    )
  }
}
function mapStateToProps(state:IAppState) {
  return { auth : state }
}
export default withRouter(connect(mapStateToProps)(ProductPage) as any);