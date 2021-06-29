import * as React from 'react';
import { NAVIGATION } from '../../../config/constants';
import { PrimaryNavigation } from './primaryNavigation/primaryNavigation';
import style from './header.scss'
import { Logo } from './logo/logo';
import { IAppState } from '../../redux/reducers/initialState';
import { Dispatch } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateBasket } from '../../redux/actions/dDataActions';
import { Basket } from './headerBasket/headerBasket';

interface IProps{
  auth: IAppState;
  dispatch: Dispatch<IAppState>;
}

interface IStates{

}

class PageHeader extends React.Component<IProps, IStates>{
  constructor(props: IProps){
    super(props)
    this.state = {

    }
  }
  emptyBasket = () => {
    this.props.dispatch(updateBasket([]));
  }
  render = () => {
    console.log('this.props.auth.auth: ', this.props.auth.auth)
    return(
      <>
        <section id={style.header}>
          <div className={style.upper}>
            <Logo />
            <Basket emptyBasket={this.emptyBasket} basketNumber={this.props.auth.auth.basket?this.props.auth.auth.basket.length:0}/>
          </div>
          <PrimaryNavigation navigationList={NAVIGATION[0]['naviItems']} />
        </section>
      </>
    )
  }
}
function mapStateToProps(state:IAppState) {
  return { auth : state }
}
export default withRouter(connect(mapStateToProps)(PageHeader) as any);