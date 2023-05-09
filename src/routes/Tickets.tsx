import React, { useState } from 'react';
import styles from "../styles/Tickets.module.css"
import Header2 from '../components/Header2';
import { useLocation } from 'react-router-dom';
import styled  from 'styled-components';

import Label from '../components/Label';

interface Item {
  qtd: number;
  name: string;
  valor: number;
}

const Lista = styled.ul`
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
`

export function Tickets(){
  
  const location = useLocation();
  const state = location.state;
  const film = state.film;
  const section = state.section;
  const [show1,setShow1] = useState(false)

  const [selectedInteira, setSelectedInteira] = useState(0);
  const [selectedMeia, setSelectedMeia] = useState(0);
  const [items, setItems] = useState<Item[]>([]);



  const handleSelectInteira = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if(event.target.value == "0"){
      setSelectedInteira(0.00);
      setItems([{ qtd: 0, name: 'Inteira', valor: selectedInteira }]);
    }
    else if(event.target.value== "1"){
      setSelectedInteira(30.60*1);
      setItems([...items,{ qtd: 1, name: 'Inteira', valor: selectedInteira }]);
    }
    else if(event.target.value== "2"){
      setSelectedInteira(30.60*2);
      setItems([{ qtd: 2, name: 'Inteira', valor: selectedInteira }]);
    }
    else{
      setSelectedInteira(30.60*3);
      setItems([{ qtd: 3, name: 'Inteira', valor: selectedInteira }]);
    }
    console.log(items)
  }
  const handleSelectMeia = (event: React.ChangeEvent<HTMLSelectElement>) => {
    
    if(event.target.value== "0"){
      setSelectedMeia(0.00);
      setItems([{ qtd: 0, name: 'Meia', valor: selectedMeia }]);
    }
    else if(event.target.value== "1"){
      setSelectedMeia(16.80*1);
      setItems([{ qtd: 1, name: 'Meia', valor: selectedMeia }]);
    }
    else if(event.target.value== "2"){
      setSelectedMeia(16.80*2);
      setItems([{ qtd: 2, name: 'Meia', valor: selectedMeia }]);
    }
    else{
      setSelectedMeia(16.80*3);
      setItems([{ qtd: 3, name: 'Meia', valor: selectedMeia }]);
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
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </select>
                          </td>
                          <td>R${selectedInteira.toFixed(2).toString()}</td>
                      </tr>
                      <tr>
                          <td>Meia</td>
                          <td>
                            <select onChange={handleSelectMeia}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                          </td>
                          <td>R${selectedMeia.toFixed(2).toString()}</td>
                      </tr>
                  </table>
                )}                
                </div> 
                <h3>Subtotal: R${(selectedInteira+selectedMeia).toFixed(2).toString()}</h3>      
                <p>__________________________________________________________________________________________</p> 
                <h2>Total: R${(selectedInteira+selectedMeia).toFixed(2).toString()}</h2>                   
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
                    <Lista>
                      {
                        items.map((item)=>(
                          <li>{item.qtd}X</li>
                        ))
                      }
                    </Lista>             
                  </div>                  
                </div>                          
              </div>             
            </div>      
        </body>
    </div>
  )
}