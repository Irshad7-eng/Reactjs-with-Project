import {useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';
import { useState } from 'react';
function App() {   
    const [amount,setAmount] = useState(0);
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    function handleIncChlick()
    {
      dispatch(increment());
    }
    function handleDecClick()
    {
      dispatch(decrement());
    }
    function handleResClick()
    {
      dispatch(reset());
    }
    function handleIncAmountClick()
    {
      dispatch(incrementByAmount(amount));
    }

    return (
      <div className='container'>
        <button onClick={handleIncChlick}> + </button>
        <p>Count : {count} </p>
        <button onClick={handleDecClick}> - </button>
        <br />
        <button onClick={handleResClick}>Reset</button>
        <br />
        <input type="Number" value={amount} placeholder='Enter amount'
        onChange={(e) => setAmount(e.target.value)} />
        <br />
        <button onClick={handleIncAmountClick}>Increment By Amount</button>
      </div>
    )
  }
  
  export default App