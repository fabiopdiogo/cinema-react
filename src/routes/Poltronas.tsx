import React, { useState } from 'react';

import styles from "../Poltronas.module.css"
import Header2 from '../components/Header2';
import PoltronaOption from '../components/PoltronaOption';

export function Poltronas(){

  const [gameState, setGameState] = useState(Array(63).fill(0))

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
                  <div className={styles.ladoA}>
                  {
                    gameState.map(() =>
                    <div>
                        <PoltronaOption></PoltronaOption>
                    </div>                  
                    )
                  }
                  </div>
                  <div className={styles.ladoB}> 
                  {
                    gameState.map(() =>
                    <div>
                        <PoltronaOption></PoltronaOption>
                    </div>                  
                    )
                  }
                  </div> 
                </div>                           
              </div>            
            </div>
            <div className={styles.div2}>


            </div>              
        </body>
    </div>
  )
}

