import React, { useState } from 'react';
import styles from "../styles/Tickets.module.css"
import Header2 from '../components/Header2';
import { useLocation } from 'react-router-dom';
import styled  from 'styled-components';

import Label from '../components/Label';

export function Tickets(){
  
  const location = useLocation();
  const state = location.state;
  const film = state.film;
  const section = state.section;
  const [show1,setShow1] = useState(false)


  function handleClick(id: string) : void{
    if(id == "1"){
      setShow1(!show1)
    }
  }
  
  return(
    <div>
        <Header2 />
          <body className={styles.body}>
            <div className={styles.container}>
              <div className={styles.div1}>
                <h1>Escola seus ingressos</h1>          
                  <div className={styles.options}>
                  <Label id="1" handleClick={handleClick}>Ingressos Tradicionais</Label>   
                  {show1 && (
                  <table>
                      <tr>
                          <td>Ingressos</td>
                          <td>Quantidade</td>
                          <td>Subtotal</td>
                      </tr>
                      <tr>
                          <td>Inteira</td>
                          <td>
                            <select name="" id="">
                              <option value="valor1">1</option>
                              <option value="valor2">2</option>
                              <option value="valor3">3</option>
                            </select>
                          </td>
                          <td>Valor</td>
                      </tr>
                      <tr>
                          <td>Meia</td>
                          <td>
                            <select name="" id="">
                                <option value="valor1">1</option>
                                <option value="valor2">2</option>
                                <option value="valor3">3</option>
                            </select>
                          </td>
                          <td>Valor</td>
                      </tr>
                  </table>
                )}
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