import React from 'react';
import styled from 'styled-components';
import styles from "./Header.module.css";

const Open = styled.img`
  display: none;
  
  @media(max-width:880px){
  display:flex;
  position: absolute;
  top: 1px;
  right: 1px;
  padding: 20px;
  cursor: pointer;
  }
`

interface Props{
  setMenuIsVisible(setMenuIsVisible: boolean): void;
}

const Header = ({setMenuIsVisible}:Props) => {
  return (
    <>
      <Open src="./menu-50.png" />
      <header className={styles.header}>
        <div className={styles.div1}>
          <h1>SHOPPING</h1>
          <img src="facebook-24.png" alt="" />
          <img src="instagram-24.png" alt="" />
          <img src="whatsapp-30.png" alt="" />

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
    </>
  )
}

export default Header   