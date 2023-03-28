import React from 'react';

import styles  from "./Body.module.css"

const Body = () => {
  return (
      <div className={styles.cinema}>
        <h1>Cinema</h1>
        <p>Bora de cineminha hoje? No Shopping Cidade você, reúne amigos, família e quem você quiser e encontra tudo para a diversão ser completa.
           Escolha o dia para ver a programação:
        </p>
        <img src="icone-cinema.svg" alt="" />
        <button>VALORES</button>
      </div>
  );
};

export default Body;