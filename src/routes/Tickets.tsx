import React, { useState } from 'react';
import styles from "../styles/Tickets.module.css"
import Header2 from '../components/Header2';
import { Link, useLocation } from 'react-router-dom';
import styled  from 'styled-components';
import { Item } from '../interfaces/Items';
import Label from '../components/Label';
import Button from '../components/input/Button';


const Lista = styled.ul` 
  border-bottom: 1px solid white;
  padding-bottom: 5px;
  list-style-type: none;
  li{
    display: flex;
    justify-content: space-between;
  }
`
const Total = styled.div`
  display: flex;
  justify-content: space-between;
`

export function Tickets(){
  
  const location = useLocation();
  const state = location.state;
  const film = state.film;
  const section = state.section;
  const [show1,setShow1] = useState(false);

  const [selectedInteira, setSelectedInteira] = useState(0);
  const [selectedMeia, setSelectedMeia] = useState(0);  
  const [totalItemsInteira, setTotalItemsInteira] = useState(0);
  const [totalItemsMeia, setTotalItemsMeia] = useState(0);
  const [itemsInteira, setItemsInteira] = useState<Item[]>([]);
  const [itemsMeia, setItemsMeia] = useState<Item[]>([]);
  function handleClick(id: string) : void{
    if(id == "1"){
      setShow1(!show1)
    }
  }

  const handleSelectInteira = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let aux= 0;
    if(event.target.value == "0"){
      setSelectedInteira(0.00);
      setItemsInteira([]);
      setTotalItemsInteira(0)
    }
    else if(event.target.value== "1"){
      setSelectedInteira(30.60*1);
      setItemsInteira([{ qtd: 1, name: 'Inteira', valor: selectedInteira }]); 
      setTotalItemsInteira(1)   
    }
    else if(event.target.value== "2"){
      setSelectedInteira(30.60*2);
      setItemsInteira([{ qtd: 2, name: 'Inteira', valor: selectedInteira }]);
      setTotalItemsInteira(2)
    }
    else{
      setSelectedInteira(30.60*3);
      setItemsInteira([{ qtd: 3, name: 'Inteira', valor: selectedInteira }]);
      setTotalItemsInteira(3)
    }

  }
  
  const handleSelectMeia = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let aux2= 0;
    if(event.target.value== "0"){
      setSelectedMeia(0.00);
      setItemsMeia([]);
      setTotalItemsMeia(0)
    }
    else if(event.target.value== "1"){
      setSelectedMeia(16.80*1);
      setItemsMeia([{ qtd: 1, name: 'Meia', valor: selectedMeia }]);
      aux2= 1; 
      setTotalItemsMeia(1)
    }
    else if(event.target.value== "2"){
      setSelectedMeia(16.80*2);
      setItemsMeia([{ qtd: 2, name: 'Meia', valor: selectedMeia }]);
      aux2= 2; 
      setTotalItemsMeia(2);
    }
    else{
      setSelectedMeia(16.80*3);
      setItemsMeia([{ qtd: 3, name: 'Meia', valor: selectedMeia }]);
      setTotalItemsMeia(3);
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
                <Link to="/poltronas" 
                  state={
                    {film: film, 
                    section:section, 
                    qtdIngressos: totalItemsInteira+totalItemsMeia, 
                    itemsInteira: itemsInteira, 
                    itemsMeia: itemsMeia,
                    valorTotal:selectedInteira+selectedMeia
                    }}>
                  <Button disabled={  totalItemsInteira+totalItemsMeia == 0 }>Continuar</Button>
                </Link>

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
                  <p>_______________________</p>
                  {
                  itemsInteira.map((item) => (
                    <Lista><li>
                        <p>{item.qtd}X Inteira</p>
                        <p>R${selectedInteira.toFixed(2).toString()}</p>
                    </li></Lista>    
                  ))
                  }        
                  {
                  itemsMeia.map((item) => (
                    <Lista><li>
                        <p>{item.qtd}X Meia</p>
                        <p>R${selectedMeia.toFixed(2).toString()}</p>
                  </li></Lista>        
                  ))
                  }
                  <Total>
                    <p>{(totalItemsInteira+totalItemsMeia)} item(s)</p>
                    <p>Total: R${(selectedInteira+selectedMeia).toFixed(2).toString()}</p>
                  </Total>                  
                </div>                  
                </div>                          
              </div>             
            </div>      
        </body>
    </div>
  )
}