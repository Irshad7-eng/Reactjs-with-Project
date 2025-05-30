import { useState ,useCallback,useEffect, useRef} from 'react'
import './App.css'

function App() {


  const [length,setLength] = useState(8);
  const [NumbAllow,setNumberAllowed] = useState(false);
  const [charAllowed,setCharallowed] = useState(false);
  const [password,setPassword] = useState("");

  //use ref hook
  const passwordRef = useRef(null);
  
  const passwordGenrator = useCallback(()=>{
    let pass ="";
    let str ="ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(NumbAllow){
      str+="0123456789";
    }
    if(charAllowed)
    {
      str+="!@#$%^&*()_+=[]{}~`";
    }

    for(let i= 1; i<=length; i++)
    {
       let char = Math.floor(Math.random() * str.length+1);
       pass += str.charAt(char);


    }

    setPassword(pass);
  
  },[length,NumbAllow,charAllowed, setPassword])

  const copyPassword= useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{passwordGenrator()},[length,NumbAllow,charAllowed, passwordGenrator])

  return (
    <  >
     
     <div className='w-full max-w-md mx-auto shadow-md
     rounded-lg px-4 my-8 text-orange-500 bg-gray-700 text-center'> 
     <h1 className="text-white text-center">Password Genrator</h1>
        <div className='flex shadow  rounded-lg overflow-hidden mb-4 '>
          <input type="text" value={password} 
          className='outline-none w-full py-1 px-3 bg-white ' placeholder='Password' readOnly  ref= {passwordRef}/>
          <button className='bg-blue-800 rounded-md px-3 py-0.5 shrink-0'
          onClick={copyPassword}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length}
            className='cuser-poiner' onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length:{length}</label>
          </div>
        </div>
        <div className='flex  items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={NumbAllow}
          id="numberInput"
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}

          />
          <label htmlFor="numberInput">Number</label>
        </div>
        <div className='flex  items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={charAllowed}
          id="charInput"
          onChange={() => {
            setCharallowed((prev) => !prev);
          }}

          />
          <label htmlFor="charInput">Char</label>
        </div>
     </div>
      
    </>
  )
}

export default App
