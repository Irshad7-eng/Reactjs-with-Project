import React,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {

    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username,password});

    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text"  value={username} placeholder='username' onChange={(e) => setUsername(e.target.value)}/>
        <input type="text" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login