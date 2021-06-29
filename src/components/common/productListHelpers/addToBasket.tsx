import * as React from 'react';

type ITypes={
  productId: string;
  updateBasket: any;
  setAddedToBasket: any;
}

export const AddToBasket = ({productId, updateBasket, setAddedToBasket}: ITypes) => {
  const doUpdate = () => {
    updateBasket(productId)
    setAddedToBasket(true);
    setTimeout(()=>{setAddedToBasket(false);},1000)
  }
  return(
    <button onClick={()=>{doUpdate()}}>Add to basket</button>
  )
}