
import './App.css'
import Login from './Componenets/Login'
import Profil from './Componenets/Profil'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>Hello Bro</h1>
      <Login/>
      <Profil/>
    </UserContextProvider>
  )
}

export default App
