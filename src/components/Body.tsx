import React from 'react';

import styles  from "./Body.module.css"
import Date from "./Date"

const Body = () => {
  return (
    <div className={styles.cinema}>
        <h1>Cinema</h1>
        <p>Bora de cineminha hoje? No Shopping você, reúne amigos, família e quem você quiser e encontra tudo para a diversão ser completa. Escolha o dia para ver a programação:</p>    

        <img src="icone-cinema.svg" alt="" />            
        <button className={styles.cinemaButton}>VALORES</button>
        <div className={styles.days}>
          <Date dia="SEG"/>
          <Date dia="TER"/>
          <Date dia="QUA"/>
          <Date dia="QUI"/>
          <Date dia="SEX"/>
          <Date dia="SAB"/>
          <Date dia="DOM"/>
        </div>

    </div>

  );
};

export default Body;