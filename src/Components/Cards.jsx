import styles from "../Components/Cards.module.css"

export function Cards (props) {
    return(
        <div className={styles.Cards}>
            <img src={props.image}/>
            {props.children}
        </div>
    )
}
