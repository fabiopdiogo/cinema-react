import React from 'react';

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.div1}>
        <h1>SHOPPING</h1>
        <div className={styles.searchBar}>
          <img src="search-24.png" alt="" />
          <input type="text" placeholder="Pesquisar" />
        </div>
      </div>
      
      <div className={styles.options}>
        <a>SOBRE O SHOPPING</a>
        <a>NOVIDADES</a>
        <a>CINEMA</a>
        <a>LOJAS</a>
        <a>ÁREA DO LOJISTA</a>
      </div>
      
    </header>
  )
}

export default Header   