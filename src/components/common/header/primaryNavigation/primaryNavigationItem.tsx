import * as React from 'react';
import { NavLink } from 'react-router-dom';
import style from './navigation.scss';

type ITypes = {
  label: string,
  link: string
}

export const PrimaryNavigationItem = ({label, link}: ITypes) => {
  if(label=='Home'){
    return(
      <NavLink exact to={link} activeClassName={style.selected}>{label}</NavLink>
    )
  }else{
    return(
      <NavLink to={link} activeClassName={style.selected}>{label}</NavLink>
    )
  }
  
}


