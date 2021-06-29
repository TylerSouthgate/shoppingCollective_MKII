import * as React from 'react';
import { NAVIGATION } from '../../../config/constants';
import { FooterNavigation } from './footerNavigation/footerNavigation';
import masterStyle from '../../routeScss/index.scss'
import style from './footer.scss'

interface IProps{

}

interface IStates{

}

export default class PageFooter extends React.Component<IProps, IStates>{
  constructor(props: IProps){
    super(props)
    this.state = {

    }
  }
  render = () => {
    return(
      <section id={style.footer} className={masterStyle.clrfix}>
        <div className={style.left}>
          <ul>
            <FooterNavigation navigationList={NAVIGATION[0]['naviItems']} />
          </ul>
        </div>
        <div className={style.middle}>
          <p><b>Can we do better?</b></p>
          <p>Mauris semper ullamcorper gravida. Donec eleifend massa sed massa rutrum placerat.</p>
          <p>Quisque pharetra purus at auctor venenatis. Proin non volutpat sapien. Nullam facilisis quis lectus dictum blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce auctor lacus sapien, id aliquam turpis aliquam in. Vivamus eu dictum nulla. Nullam ultricies ultricies metus et bibendum. Nam id lectus rhoncus, vehicula mauris at, blandit eros.</p>
        </div>
        <div className={style.right}>
          <p><b>Some other important information!</b></p>
          <p>Quisque pharetra purus at auctor venenatis. Proin non volutpat sapien. Nullam facilisis quis lectus dictum blandit.</p>
          <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce auctor lacus sapien, id aliquam turpis aliquam in. Vivamus eu dictum nulla. Nullam ultricies ultricies metus et bibendum. Nam id lectus rhoncus, vehicula mauris at, blandit eros.</p>
        </div>
      </section>
    )
  }
}