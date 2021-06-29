import * as React from 'react';
import style from './mastHead.scss';

type ITypes = {
  title: string,
  hookLine: string
}

export const MastHead = ({title, hookLine}: ITypes) => {
  return(
    <div id={style.mastHead}>
      <h1>{title}</h1>
      <p>{hookLine}</p>
    </div>
  )
}