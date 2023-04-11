import React, {useState} from 'react';
import Header from './components/Header';
import Body from './components/Body'

import styles from './App.module.css'

import { IFilms } from "../src/interfaces/Films"
import Seg from './films/Seg';

function App() {  
  return (
    <div className={styles.main}>
      <Header />
      <Body Seg={Seg}/>
    </div>
  );
}

export default App;
