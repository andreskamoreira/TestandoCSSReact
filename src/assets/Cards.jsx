import image2 from "../images/image-retro-pcs.jpg"
import image3 from "../images/image-top-laptops.jpg"
import image4 from "../images/image-gaming-growth.jpg"
import styles from "../assets/Cards.module.css"

export function Cards () {
    return(
        <div className={styles.Cards}>
            <section>
                    <div className="image2">
                        <a href="#" className="image2"><img src={image2} alt=""/></a>
                        <strong>01</strong>
                    </div>
                    <div className="image3">
                    <a href="#" className="image3"><img src={image3} alt=""/></a>
                    <strong>02</strong>
                    </div>
                    <div className="image4">
                    <a href="#" className="image4"><img src={image4} alt=""/></a>
                    <strong>03</strong> 
                    </div>
                </section>
        </div>
    )
}
