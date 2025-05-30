import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // useState Hook return one value and one function
  let [count, setCount]=useState(0);
 
  const handleIncClick = () =>
  {
    if(count < 20)
    {
      setCount(count+1);
    }
    else{
      setCount(count = 0);
    }
  }
  
  function handleDecClick()
  {
    if(count > 0)
    {
      setCount(count-1);
    }
    else{
      setCount(count = 0);
    }
     
  }
  return (
    <>
      <h1>This is me Counter</h1>
      <h2>Counter value :{count}</h2>
      <button onClick={handleIncClick}>increas the count value</button>
      <button onClick={handleDecClick}>decrease the count value</button>
    </>
  )
}

export default App
