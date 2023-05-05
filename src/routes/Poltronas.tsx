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
  const location = useLocation();
  const state = location.state;
  const film = state.film;
  const section = state.section;

  const linhas = [0,1,2,3,4,5,6,7,8,9];
  const colunas = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];

  const numRows : number = 14
  const numCols : number = 10


  const seats: number[][] = new Array<number[]>(numRows);

  for (let i = 0; i < numCols; i++) {
    seats[i] = new Array<number>(numRows);
  }

  const setSeat = (row: number,col : number, checked: boolean) =>{
    if(checked){
      seats[row][col] = 1;
    }
    else{
      seats[row][col] = 0;
    }
    console.log(row,col)
  }

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
                      <div className={styles.corredor}></div>
                      {linhas.map((row) => (
                        <div className={styles.row}>
                          {/* Cria um array com números de 1 até numCols para representar as colunas */}
                          {colunas.map((col) => (
                            <PoltronaOption row={row} col={col} setSeat={setSeat}>{col+1}</PoltronaOption>
                          ))}
                        </div>
                      ))}
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