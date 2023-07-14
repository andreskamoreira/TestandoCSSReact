import image1 from "../assets/images/image-web-3-desktop.jpg"
import styles from '../layouts/Body.module.css'


export function Body () {
    return (
        <div className={styles.body}>

            <div className={styles.div_topo}> 
                <div id="image">
                        <div className={styles.image}/>
                        <a href="#"><img src={image1} alt="" width={"95%"}/></a>
                </div>                   
                <div className={styles.central}>
                        <div className={styles.titulogrande}>
                                <h1>The Bright <br/>
                                Future of <br/>
                                Web 3.0?</h1>
                        </div>

                        <div className={styles.texto2}>
                            <p>We dive into the next evolution of the web that <br/>
                            claims to put the power of the platforms back <br/>
                            into the hands of the people. But is it really <br/>
                            fulfiling its promise?
                            <br/>
                            <br/>
                            <button type="button" className={styles.Cardbutton}>
                                READ MORE
                            </button>   
                            </p> 
                        </div>                        
                </div>
            </div>


            <div className={styles.div}>
                        <div className={styles.container}>
                        <strong>New</strong>
                        <h6 className={styles.h6}>Hydrogen VS Eletric Cars</h6>     
                        <p className={styles.container_p}>Will hydrogen-fueled cars ever catch up<br/>
                        to EVs?</p>  
                        <p className={styles.container_p}>________________________________________________</p>   
                        <h6 className={styles.h6}>The Downsides of AI Artistry</h6>  
                        <p className={styles.container_p}>What are the possible adverse effects of<br/>
                        on-demand AI image generation?</p>
                        <p className={styles.container_p}>________________________________________________</p>
                        <h6 className={styles.h6}>Is VC Funding Drying Up?</h6>
                        <p className={styles.container_p}>Private funding by VC firms is down 50%<br/>
                        YOY. We take a look at what that means.</p>
                        </div>
            </div>   
        </div>
    );
}