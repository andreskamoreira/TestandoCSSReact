import styles from './App.module.css'
import {Header} from './Components/Header'
import {Body} from './layouts/Body'
import {Cards} from './Components/Cards'
import image2 from "./assets/images/image-retro-pcs.jpg"
import image3 from "./assets/images/image-top-laptops.jpg"
import image4 from "./assets/images/image-gaming-growth.jpg"


export default function App() {
  
  return (
    <div className={styles.page}>
      <Header/>
      <Body/>
        <div className={styles.father_cards}>
          <Cards>
              <img src={image2}/>
              <div className={styles.card1}>
                    <h2>01</h2>
                    <h4>Reviving Retro Pcs</h4>
                    <p>What happens when old PCs<br/>
                    are given modern upgrades?</p>
              </div>
          </Cards>

          <Cards>
              <img src={image3}/>
              <div className={styles.card1}>
                    <h2>02</h2>
                    <h4>Top Laptops of 2022</h4>
                    <p>Our best picks for various<br/>
                    needs and budgets.</p>  
              </div>
          </Cards>

          <Cards>
            <img src={image4}/>
            <div className={styles.card1}>
                  <h2>03</h2>
                  <h4>The Growth of Gaming</h4>
                  <p>How the pandemic has sparked<br/>
                  fresh opportunities.</p>
            </div>
          </Cards>
        </div>
    </div>
  )
}

