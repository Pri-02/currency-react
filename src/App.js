// import React from 'react';
import './App.css';
import { useState } from 'react';
import {Inputbox} from './components/Inputbox';
// import {useCurrencyInfo} from './hooks/useCurrencyInfo';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount,setAmount]= useState(0);
  const [from,setFrom]=useState("usd");
  const [to,setTo]=useState("inr");
  const [convertedamount,setConvertedamount]= useState(0);

  const currencyInfo =useCurrencyInfo(from)
  const options=Object.keys(currencyInfo)
  const swap =()=>{
    setFrom(to)
    setTo(from)
    setConvertedamount(amount)
    setAmount(convertedamount)
  }
  const convert=()=>{
    setConvertedamount(amount*currencyInfo[to]);
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
