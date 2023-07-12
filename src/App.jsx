import { useState } from 'react'
import styles from './App.module.css'
import {Header} from './Components/Header'
import {Body} from './assets/Body'
import {Cards} from './assets/Cards'



export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.page}>
     <Header/>
     <Body/>
     <Cards/>
    </div>
  )
}

