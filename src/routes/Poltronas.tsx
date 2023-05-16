import React, { useState } from 'react';
import { Item } from '../interfaces/Items';
import styled from 'styled-components';
import styles from "../styles/Poltronas.module.css"
import Header2 from '../components/Header2';
import PoltronaOption from '../components/PoltronaOption';

import { useLocation } from 'react-router-dom';

export function Poltronas(){
  const location = useLocation();
  const state = location.state;
  const film = state.film;
  const section = state.section;
  const itemsInteira : Item[] = state.itemsInteira;
  const itemsMeia : Item[] = state.itemsMeia;
  const qtdIngressos = state.qtdIngressos;
  const valorTotal = state.valorTotal;
  const linhas = [0,1,2,3,4,5,6,7,8,9];
  const linhasOrdem = ['A','B','C','D','E','F','G','H','I','J'];
  const colunas = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];

  const numRows : number = 14;
  const numCols : number = 10;

  const [control,setControl] = useState(0);

  const seats: number[][] = new Array<number[]>(numRows);

  const Lista = styled.ul` 
  border-bottom: 1px solid white;
  padding-bottom: 5px;
  list-style-type: none;
`
  const Total = styled.div`
    display: flex;
    justify-content: space-between;
  `
    const Linha = styled.p`  
    padding: 0;
    margin: 0;
  `
  const Fileira = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    color: black;
    gap:10px;
  `

  for (let i = 0; i < numCols; i++) {
    seats[i] = new Array<number>(numRows);
  }

  const setSeat = (row: number,col : number, checked: boolean) =>{
    if(checked === true){
      seats[row][col] = 1;
      setControl(control+1);
    }
    else{
      seats[row][col] = 0;
      setControl(control-1);
    }
    console.log(control)
  }

  return(
    <div className={styles.page}>
        <Header2 />
        <body className={styles.body}>
          <div className={styles.container}>
            <div className={styles.div1}>
              <h1>Escolha {qtdIngressos} poltrona(s)</h1>
              <p>Selecione seu(s) lugar(es) clicando na poltrona de acordo a legenda.</p>
              <p>Para desmarcar seu(s) lugar(es) clique novamente sobre a poltrona(s) reservada(s).</p>            
                <div className={styles.sala}>  
                      <div className={styles.containerAssentos}>
                          <Fileira>
                              {linhasOrdem.map((linha) => (
                                  <Linha>{linha}</Linha>
                                ))
                              }     
                          </Fileira>                 
                          <div className={styles.assentos}>                         
                            {linhas.map((row) => (
                              <div className={styles.row}>
                                {/* Cria um array com números de 1 até numCols para representar as colunas */}
                                {colunas.map((col) => (
                                  <PoltronaOption row={row} col={col} setSeat={setSeat} disabled={(control===qtdIngressos)} id={linhasOrdem[row]+(col+1).toString()}>{col+1}</PoltronaOption>
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
                          <p>Cineart - Cidade<br />Belo Horizonte<br/>São Paulo, 957, Loja GG --<br/>24/25 GGG 1/-Centro</p>
                          <p>_______________________</p>
                          <p>{section}</p>
                          <p>_______________________</p>
                          {
                            itemsInteira.map((item) => (
                              <Lista><li>{(item.qtd)}X Inteira</li></Lista>    
                            ))
                            }        
                            {
                            itemsMeia.map((item) => (
                              <Lista><li>{(item.qtd)}X Meia</li></Lista>    
                            ))
                            }
                            <Total>
                              <p>{qtdIngressos} item(s)</p>
                              <p>Total: R${(valorTotal).toFixed(2).toString()}</p>
                            </Total>  
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