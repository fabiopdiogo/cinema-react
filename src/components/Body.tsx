import React ,{useState} from 'react'; 
import { IFilms } from "../interfaces/Films"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


import styles  from "./Body.module.css"

import Date from "./Date"

interface Props {
  Schedule1: IFilms[];
  Schedule2: IFilms[];
}


const Body = ({Schedule1,Schedule2} : Props) => { 
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);

  const showTodos = (show :string) => {  
    if(show == '1'){
      setShow1(true)
      setShow2(false)
    } 
    if(show == '2'){
      setShow2(true)
      setShow1(false)
    }
    
  }  

  return (
    <div className={styles.cinema}>
        <h1>Cinema</h1>
        <p>Bora de cineminha hoje? No Shopping você, reúne amigos, família e quem você quiser e encontra tudo para a diversão ser completa. Escolha o dia para ver a programação:</p>    

        <img src="icone-cinema.svg" alt="" />            
        <button className={styles.cinemaButton}>VALORES</button>
        <div className={styles.days}>
          <Date dia="SEG" show="1" handleClick={showTodos}/>
          <Date dia="TER" show="2" handleClick={showTodos}/>
          <Date dia="QUA" show="1" handleClick={showTodos}/>
          <Date dia="QUI" show="2" handleClick={showTodos}/>
          <Date dia="SEX" show="1" handleClick={showTodos}/>
          <Date dia="SAB" show="2" handleClick={showTodos}/>
          <Date dia="DOM" show="1" handleClick={showTodos}/>
        </div>

        <>
          {show1 && (
            <div className={styles.filmeContainer}>
              {Schedule1.map((film) =>(
                <div className={styles.filme}>                  
                  <img src={film.image} />
                  <div className={styles.filmeInfo}>
                    <h2>{film.name}</h2>
                    <div className={styles.filmeInfo2}>                    
                      <p>{film.genre}</p>
                      <p>|</p>
                      <p>{film.age}</p>
                      <p>|</p>
                      <p>{film.duration}</p>
                    </div>
                    <div>{
                      film.schedules.map((section) => (
                        <p><Link to="/Poltronas" state={film}>{section}</Link></p>
                      ))
                    }
                    </div>
                  </div>                  
                </div>
              ))}
            </div>
          )}
          {show2 && (
            <div className={styles.filmeContainer}>
              {Schedule2.map((film) =>(
                <div className={styles.filme}>                  
                  <img src={film.image} />
                  <div className={styles.filmeInfo}>
                    <h2>{film.name}</h2>
                    <div className={styles.filmeInfo2}>                    
                      <p>{film.genre}</p>
                      <p>|</p>
                      <p>{film.age}</p>
                      <p>|</p>
                      <p>{film.duration}</p>
                    </div>
                    <div>{
                      film.schedules.map((section) => (
                        <p><Link to="/Poltronas">{section}</Link></p>
                      ))
                    }
                    </div>
                  </div>                  
                </div>
              ))}
            </div>
          )}               
        </>
    </div>
    
  );
};

export default Body;