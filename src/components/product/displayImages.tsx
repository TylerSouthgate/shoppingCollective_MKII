import * as React from 'react';
import style from './product.scss';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
type ITypes = {
  images: any;
}
export const DisplayImages = ({images}: ITypes) => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [thisLeft, setThisLeft] = React.useState(0);
  const [canLeft, setCanLeft] = React.useState(images.length>6?true:false);
  const [canRight, setCanRight] = React.useState(false);
  const localStyle: any = {'width': images.length*112+'px', 'left': thisLeft+'px'}
  let thisDisplayImage: any = {
    'backgroundImage': 'url('+images[currentImage]+')',
    'backgroundSize': 'contain',
    'backgroundPosition': 'center',
    'backgroundRepeat':'no-repeat'
  }
  function leftSlider(){
    if(thisLeft<0){
      setThisLeft(thisLeft+112)
      setCanLeft(true);
    }else{
      setCanRight(false)
    }
  }
  function rightSlider(){
    if (thisLeft > -Math.abs((images.length*112)-(112*6)) ){
      setThisLeft(thisLeft-112)  
      setCanRight(true)
    }else{
      setCanLeft(false)
    }
  }
  return(
    <div className={style.detailImageCont}>
      <div className={style.displayImage} style={thisDisplayImage}></div>
      
      <div className={style.masterCar}>
        <div className={canRight?style.controllerLeft:style.controllerLeftInactive} onClick={canRight?()=>{leftSlider()}:null}><AiOutlineLeft /></div>
        <div className={canLeft?style.controllerRight:style.controllerRightInactive} onClick={canLeft?()=>{rightSlider()}:null}><AiOutlineRight /></div>
      
        <div className={style.thumbList}>
          
          <div className={style.thumbListCar} style={localStyle}>
            {Object.keys(images).map((key: any)=>{
              if(key==(currentImage)){
                let inlineStyle: any = {
                  'backgroundImage': 'url('+images[key]+')',
                  'backgroundSize': 'cover',
                  'backgroundPosition': 'center'
                }
                return(
                  <div className={style.selected} style={inlineStyle} onClick={()=>{setCurrentImage(key)}} key={'disp'+key}></div>
                )
              }else{
                let inlineStyle: any = {
                  'backgroundImage': 'url('+images[key]+')',
                  'backgroundSize': 'cover',
                  'backgroundPosition': 'center'
                }
                return(
                  <div style={inlineStyle} onClick={()=>{setCurrentImage(key)}} key={'disp'+key}></div>
                )
              }
            })}
          </div>
        </div>
      </div>


    </div>
  )
}