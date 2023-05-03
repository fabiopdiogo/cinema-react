import React, { useState } from 'react';
import { IFilms } from "../interfaces/Films"

import styles from "../Poltronas.module.css"
import Header2 from '../components/Header2';
import PoltronaOption from '../components/PoltronaOption';

import { useLocation } from 'react-router-dom';


interface Props {
  infos: IFilms[];
}


export function Poltronas(){
  const linhas = [1,2,3,4,5,6,7,8,9,10];
  const colunas = [1,2,3,4,5,6,7];

  const location = useLocation();
  const film = location.state;
  console.log(film.age)
  return(
    <div className={styles.page}>
        <Header2 />
        <body className={styles.body}>
          <div className={styles.container}>
            <div className={styles.div1}>
              <h1>Escola xx poltrona(s)</h1>
              <p>Selecione seu(s) lugar(es) clicando na poltrona de acordo a legenda.</p>
              <p>Para desmarcar seu(s) lugar(es) clique novamente sobre a poltrona(s) reservada(s).</p>            
                <div className={styles.sala}>
                  <div className={styles.assentos}>     
                    <div>
                      {linhas.map((row) => (
                        <div className={styles.ladoA}>
                          {/* Cria um array com números de 1 até numCols para representar as colunas */}
                          {colunas.map((col) => (
                            <PoltronaOption >{col}</PoltronaOption>
                          ))}
                        </div>
                      ))}
                    </div>             
                    <div>
                        {linhas.map((row) => (
                          <div className={styles.ladoB}>
                            {/* Cria um array com números de 1 até numCols para representar as colunas */}
                            {colunas.map((col) => (
                              <PoltronaOption >{col}</PoltronaOption>
                            ))}
                          </div>
                        ))}
                    </div>                   
                  </div>
                  
                  <span>Tela</span>
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
                          <p>Cineart - Cidade<br />Belo HorizonteS<br/>ão Paulo, 957, Loja GG --<br/>24/25 GGG 1/-Centro</p>
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

