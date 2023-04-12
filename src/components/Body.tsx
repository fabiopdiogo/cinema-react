import React ,{useState} from 'react'; 
import { IFilms } from "../interfaces/Films"

import styles  from "./Body.module.css"
import Date from "./Date"



interface Props {
 Seg: IFilms[];
}

const Body = ({Seg} : Props) => { 
  const [show, setShow] = useState(false);
  
  const handleClick = (dia) =>{
    setShow(!show)
  }


  return (
    <div className={styles.cinema}>
        <h1>Cinema</h1>
        <p>Bora de cineminha hoje? No Shopping você, reúne amigos, família e quem você quiser e encontra tudo para a diversão ser completa. Escolha o dia para ver a programação:</p>    

        <img src="icone-cinema.svg" alt="" />            
        <button className={styles.cinemaButton}>VALORES</button>
        <div className={styles.days}>
          <Date dia="SEG" handleClick={handleClick}/>
          <Date dia="TER" handleClick={handleClick}/>
          <Date dia="QUA" handleClick={handleClick}/>
          <Date dia="QUI" handleClick={handleClick}/>
          <Date dia="SEX" handleClick={handleClick}/>
          <Date dia="SAB" handleClick={handleClick}/>
          <Date dia="DOM" handleClick={handleClick}/>
        </div>

        <>
          {show === true ? (
            <div className={styles.filmeContainer}>
              {Seg.map((film) =>(
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
                        <p>{section}</p>
                      ))
                    }
                    </div>

                  </div>
                  
                </div>
              ))}
            </div>
          ) : (
            <p>Não mostrando</p>
          )
            
          }        
        </>

    </div>

  );
};

export default Body;