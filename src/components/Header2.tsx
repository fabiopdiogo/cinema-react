import React from "react"

import styles from "./Header2.module.css"

function Header (){
  return(
    <header className={styles.container}>
      <h1>Cinema</h1>     
      <div className={styles.options}>
        <div className={styles.option1}><p>CINEMA CLUB</p><img src="heart.jpg" alt="" /></div>
        <div className={styles.option2}><p>Usuario</p><img src="user.png" alt="" /></div>
      </div>
    </header>
  )
}

export default Header;