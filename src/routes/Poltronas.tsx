import React, { useState } from 'react';

import styles from "../Poltronas.module.css"
import Header2 from '../components/Header2';
import PoltronaOption from '../components/PoltronaOption';

export function Poltronas(){
  const [gameState, setgameState] = useState(Array(7).fill(0))
  const linhas = [1,2,3,4,5,6,7,8,9,10]
  const colunas = [1,2,3,4,5,6,7]
  
  const numRows = 10;
  const numCols = 7;
  
  // Cria um array com números de 1 até numRows para representar as fileiras


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
                            <button>{col}</button>
                          ))}
                        </div>
                      ))}
                    </div>             
                    <div>
                        {linhas.map((row) => (
                          <div className={styles.ladoB}>
                            {/* Cria um array com números de 1 até numCols para representar as colunas */}
                            {colunas.map((col) => (
                              <button>{col}</button>
                            ))}
                          </div>
                        ))}
                    </div>                   
                  </div>
                  
                  <span>Tela</span>
                </div>                           
              </div>            
            </div>
            <div className={styles.div2}>


            </div>              
        </body>
    </div>
  )
}

