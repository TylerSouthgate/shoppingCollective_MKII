import * as React from 'react';

type ITypes = {
  nodeStyle: any,
  currency: string,
  amount: number,
  exchange: number
}

export const GetExchangeConversion = ({ nodeStyle, currency, amount, exchange }: ITypes) => {
  return(
    <p className={nodeStyle}>{currency=='USD'?'$':currency=='GBP'?'£':<span>&euro;</span>}{(amount*exchange).toFixed(2)}</p>
  )
}

