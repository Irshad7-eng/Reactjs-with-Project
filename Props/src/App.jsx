import { useState } from 'react'
import './App.css'
import Card from './Component/Card'




function App() {
  let myObj = {
        name: "irshad",
        age:"20",
    }
    let newArr = [1,2,3];
  return (
    < >
      <Card username = "irshad" rollno = "2020" someObj={myObj} arr={newArr}/>
      <Card username="Ayan"/>
    </>
  )
}

export default App
