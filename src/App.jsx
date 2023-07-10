import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import {Body} from './assets/Body'
import { Cards } from './assets/Cards'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Body/>
     <Cards/>
    </>
  )
}

export default App
