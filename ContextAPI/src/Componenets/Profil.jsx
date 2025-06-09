import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'

const Profil = () => {
    const {user} = useContext(UserContext);

    if(!user) return <div>Please Login</div>;
    else return <div>Welcome {user.username}</div>;

    
  return (
    <div>Profil</div>
  )
}

export default Profil