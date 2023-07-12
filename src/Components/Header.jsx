import styles from './Header.module.css'

function Header () {
    return (
        <div className={styles.Header}>
         <h1><strong> W. </strong></h1>
            <nav className={styles.menu}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">Trending</a></li>
                    <li><a href="#">Categories</a></li>
                
                </ul>   
            </nav>
        </div>    
    );
}

export default Header