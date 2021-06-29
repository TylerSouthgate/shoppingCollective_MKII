import * as React from 'react';
import { getAllImages } from '../common/productListHelpers/getAllImages';
import masterStyle from '../routeScss/index.scss';
import { DisplayImages } from './displayImages';
import style from './product.scss';
import ProductDetailActions from './productDetailActions';


interface IProps{
  product: any;
  currency: string;
  exchange: number;
  updateCurrency: any;
  updateBasket: any;
}
interface IStates{
  
}

export default class ProductDetails extends React.Component<IProps, IStates>{
  constructor(props: IProps){
    super(props);
    this.state = {
      
    }
  }

  render = () => {
    
    if(this.props.product!=null){
      return(
        <div className={masterStyle.clrfix}>
          <div className={style.left}>
            <h3><b>{this.props.product['name']}</b></h3>
            <small>from {this.props.product['prices.merchant']}</small>
            {this.props.product['imageURLs']!=null&&this.props.product['imageURLs']!=''?
              <DisplayImages images={getAllImages(this.props.product['imageURLs'])}/>
            :null}
            <div className={style.description}>
              <h3>Description</h3>
              <p>{this.props.product['description']}</p>
            </div>
          </div>
          <div className={style.right}>
            <ProductDetailActions 
                currency={this.props.currency}
                amount={this.props.product['prices.amountMin']}
                exchange={this.props.exchange}
                updateCurrency={this.props.updateCurrency}
                updateBasket={this.props.updateBasket}
                productId={this.props.product['id']}
            />
          </div>
        </div>
      )
    }else{
      return null
    }
  }
}