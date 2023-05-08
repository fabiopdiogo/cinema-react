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

  const [selectedInteira, setSelectedInteira] = useState(0);
  const [selectedMeia, setSelectedMeia] = useState(0);

  let valorInteira : Number = 0;
  let valorMeia  = 0;

  const handleSelectInteira = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if(event.target.value== "valor0"){
      setSelectedInteira(0.00);
      console.log(selectedInteira)
    }
    if(event.target.value== "valor1"){
      setSelectedInteira(30.60*1);
      console.log(selectedInteira)
    }
    else if(event.target.value== "valor2"){
      setSelectedInteira(30.60*2);
      console.log(selectedInteira)
    }
    else{
      setSelectedInteira(30.60*3);
      console.log(selectedInteira)
    }
    console.log(selectedInteira)
  }
  const handleSelectMeia = (event: React.ChangeEvent<HTMLSelectElement>) => {
    
    if(event.target.value== "valor0"){
      setSelectedMeia(0.00);
      console.log(selectedMeia)
    }
    if(event.target.value== "valor1"){
      setSelectedMeia(16.80*1);
      console.log(selectedMeia)
    }
    else if(event.target.value== "valor2"){
      setSelectedMeia(16.80*2);
      console.log(selectedMeia)
    }
    else{
      setSelectedMeia(16.80*3);
      console.log(selectedMeia)
    }
  }
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
                            <select onChange={handleSelectInteira}>
                              <option value="valor0">0</option>
                              <option value="valor1">1</option>
                              <option value="valor2">2</option>
                              <option value="valor3">3</option>
                            </select>
                          </td>
                          <td>{selectedInteira.toFixed(2).toString()}</td>
                      </tr>
                      <tr>
                          <td>Meia</td>
                          <td>
                            <select onChange={handleSelectMeia}>
                                <option value="valor1">0</option>
                                <option value="valor1">1</option>
                                <option value="valor2">2</option>
                                <option value="valor3">3</option>
                            </select>
                          </td>
                          <td>{selectedMeia.toFixed(2).toString()}</td>
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