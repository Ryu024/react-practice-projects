import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
    const [inputValue , setInputValue] = useState(null)
    const [from  , setFrom] = useState("EUR")
    const [to , setTo] = useState("INR");
    const [value , setValue] = useState(0)
    const [isLoading , setIsLoading] = useState(false)
    useEffect(function () {

        async function CurrencyConverter() {
            setIsLoading(true)
            const res = await fetch(`https://api.frankfurter.app/latest?amount=${inputValue}&from=${from}&to=${to}`);
            const data = await res.json();
            console.log(data.rates[to])
            setValue(data.rates[to]);
        }
        if(from === to) return setValue(inputValue)
        CurrencyConverter();
    } , [from, to , inputValue])
  return (
    <>
    <div>
        <input type="text" name="text"  value={inputValue} onChange={(e)=> (setInputValue(Number(e.target.value)))}/>
        <select value={from} onChange={(e) => (setFrom(e.target.value))}>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
            <option value="USD">USD</option>
        </select>
        <select value={to} onChange={(e) => {setTo(e.target.value)}}>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
            <option value="USD">USD</option>

        </select>

    </div>
    <div>
      {value === 0 ? "" : (`${value} ${to}`)}
    </div>
   </>
  )
}

export default App
