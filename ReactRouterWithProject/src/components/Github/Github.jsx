import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {

    const data = useLoaderData();


    // const [data,setData] = useState([]);
    // useEffect(()=>
    // {
    //     fetch('http://api.github.com/users/irshad7-eng')
    //     // fetch('http//api.github.com/users/hiteshchoudhary')
    //     .then(Response => Response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })

    // },[]);
  return (
    <div className='text-center m-4 bg-gray-600
    text-white p-4 text-3xl '>Github Followers : {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width = {250}/>
    </div>

  )
}

export default Github

export const githubInfoLoader = async() =>{
    const response = await  fetch('http://api.github.com/users/irshad7-eng')
        return response.json();
}