import * as React from 'react';
import style from './firstImage.scss';

type ITypes={
  data: string;
  usage: string;
}

export const GetFirstImage = ({data,usage}: ITypes) => {
  let imageStrList: any = data.split(',');
  let imageUrl: string = imageStrList[0]
  let inlineStyle: any = {
    'backgroundImage': 'url('+imageUrl+')',
    'backgroundSize': 'cover',
    'backgroundPosition': 'center'
  }
  return(
    <div className={usage=='SHOP'?style.shopImage:style.basketImage} style={inlineStyle} />
  )
}