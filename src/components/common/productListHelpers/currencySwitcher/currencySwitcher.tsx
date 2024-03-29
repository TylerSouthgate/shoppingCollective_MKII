import * as React from 'react';
import style from './currencySwitcher.scss'


type ITypes = {
  currentCurrancy: string;
  updateCurrency: any;
}
export const CurrencySwitcher = ({currentCurrancy, updateCurrency}:ITypes) => {
  const [thisCurrency, setThisCurrency]  = React.useState(currentCurrancy)
  const makeTheChange = (inValue: any) => {
    setThisCurrency(inValue)
    updateCurrency(inValue)
  }
  const makeSelectTheChange = (inValue: React.FormEvent<HTMLSelectElement>) => {
    setThisCurrency(inValue.currentTarget.value)
    updateCurrency(inValue.currentTarget.value)
  }
  
  return(
    <>
    {/*
    <div id={style.currencySwitcher}>
      <p>Select your currency: </p>
      <label htmlFor="usd_radio">
        <input type="radio" name="usd_radio" checked={thisCurrency=='USD'} onChange={() => {makeTheChange('USD')}} />
        USD
      </label>
      <label htmlFor="ukp_radio">
        <input type="radio" name="ukp_radio" checked={thisCurrency=='GBP'} onChange={() => {makeTheChange('GBP')}} />
        GBP
      </label>
      <label htmlFor="usd_radio">
        <input type="radio" name="eur_radio" checked={thisCurrency=='EUR'} onChange={() => {makeTheChange('EUR')}} />
        EUR
      </label>
    </div>
    */}
    <div id={style.currencySwitcher}>
      <p>Select your currency: </p>
      <select defaultValue={currentCurrancy} onChange={(e: any) => {makeSelectTheChange(e)}}>
         <option value={'USD'}>USD</option>
         <option value={'GBP'}>GBP</option>
         <option value={'EUR'}>EUR</option>
      </select>
    </div>
    </>
  )
}