import { useState } from 'react'
import './App.css'
import Header from './assets/Header/Header'
import {Body} from './assets/Header/Body/Body'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Body/>
    </>
  )
}

export default App
