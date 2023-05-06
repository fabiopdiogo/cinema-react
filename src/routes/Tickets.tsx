import React, { useState } from 'react';

import styles from "../styles/Tickets.module.css"
import Header2 from '../components/Header2';

import { useLocation } from 'react-router-dom';


export function Tickets(){
  const location = useLocation();
  const state = location.state;
  const film = state.film;
  const section = state.section;

  return(
    <div className={styles.page}>
        <Header2 />
        <body className={styles.body}>
          <div className={styles.container}>
            <div className={styles.div1}>
              <h1>Escola seus ingressos</h1>          
                <div className={styles.tabela}>   

                </div>                           
              </div>     
              <div className={styles.div2}>
                <div className={styles.filmInfo}>
                <img src={film.image} />     
                  <div className={styles.infos}>
                    {
                        <div>
                          <h2>{film.name}</h2>
                          <label>{film.age}</label>
                          <p>Cineart - Cidade<br />Belo Horizonte<br/>São Paulo, 957, Loja GG --<br/>24/25 GGG 1/-Centro</p>
                          <p>_______________________</p>
                          <p>{section}</p>
                        </div>
                        
                    }                    
                  </div>                  
                </div>                          
              </div>             
            </div>      
        </body>
    </div>
  )
}