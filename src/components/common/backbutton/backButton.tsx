import * as React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useHistory } from 'react-router';
import style from './backbutton.scss';


export const BackButton = () => {
  let history: any = useHistory();
  const goBack = () => {
    history.go(-1);
  }
  return(
    <div id={style.back}><p onClick={()=>{goBack()}}><AiOutlineArrowLeft /> Back</p></div>
  )
}