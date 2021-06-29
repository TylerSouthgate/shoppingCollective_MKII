import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ROUTE_ABOUT, ROUTE_BASKET, ROUTE_CONTACT, ROUTE_HOME, ROUTE_PRODUCT, ROUTE_SHOP } from '../config/constants';
import AboutPage from './about/about';
import HomePage from './home/home';
import ContactPage from './contact/contact';
import BasketPage from './basket/basket';
import ShopPage from './shop/shop';
import ProductPage from './product/product';

interface IProps{

}
interface IStates{

}

export default class MainRoutes extends React.Component<IProps, IStates>{
  constructor(props: IProps){
    super(props)
    this.state = {

    }
  }
  render = () => {
    return(
      
        <Switch>
          <Route exact path={ROUTE_HOME} component={HomePage} />
          <Route path={ROUTE_ABOUT} component={AboutPage} />
          <Route path={ROUTE_CONTACT} component={ContactPage} />
          <Route path={ROUTE_BASKET} component={BasketPage} />
          <Route path={ROUTE_PRODUCT} component={ProductPage} />
          <Route path={ROUTE_SHOP} component={ShopPage} />
        </Switch>
      
    )
  }
} 
