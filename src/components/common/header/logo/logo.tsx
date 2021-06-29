import * as React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_HOME } from '../../../../config/constants';
import style from './logo.scss'

export const Logo = () => {
  return(
    <div className={style.logo}>
      <Link to={ROUTE_HOME}>shopping<br />collective</Link>
    </div>
  )
}