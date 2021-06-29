import * as React from 'react';
import style from './mastHead.scss';

type ITypes = {
  title: string,
  hookLine?: string
}

export const MastHead = ({title, hookLine}: ITypes) => {
  return(
    <div id={style.mastHead}>
      <h1>{title}</h1>
      {hookLine!=null&&hookLine!=''?<p>{hookLine}</p>:null}
    </div>
  )
}