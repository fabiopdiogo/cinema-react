import React ,{useState} from 'react'; 

import styles  from "./Body.module.css"
import Date from "./Date"



const Body = () => { 
  const [show, setShow] = useState(false);
  const handleClick = () =>{
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
            <p>Mostrando</p>
          ) : (
            <p>Não mostrando</p>
          )
            
          }        
        </>

    </div>

  );
};

export default Body;