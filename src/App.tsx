import React from 'react';
import Header from './components/Header';
import Body from './components/Body'

import styles from './App.module.css'

import { IFilms } from "../src/interfaces/Films"


function App() {
  const seg : IFilms[] = []

  seg[0].name = "Mario"
  seg[0].genre = "Animação"
  seg[0].age = "Livre"
  seg[0].size = "1hr 32 minutos"
  seg[0].synopsis ="Adaptação do jogo homônimo. Acompanhe o encanador Mario e seu irmão Luigi tentando salvar uma princesa capturada. Para alcançar o objetivo e libertá-la, os dois precisarão embarcar em uma viagem por um labirinto subterrâneo."

  return (
    <div className={styles.main}>
      <Header />
      <Body seg={seg}/>
    </div>
  );
}

export default App;
