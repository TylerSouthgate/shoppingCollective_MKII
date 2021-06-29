import * as React from 'react';
import style from './product.scss';

type ITypes={
  cats: string
}

export const GetCategories = ({cats}: ITypes) => {
  let catsList: any = cats.split(',')
  return(
    <div id={style.cats}>
      <p>Categories</p>
      {Object.keys(catsList).map((key: any)=>{
        return(
          <span key={'cat'+key}>{catsList[key]}</span>
        )
      })}
    </div>
  )
}