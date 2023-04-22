import React, {useState} from 'react';
import Header from '../src/components/Header';
import Body from '../src/components/Body'

import styles from './App.module.css'

import { IFilms } from "../src/interfaces/Films"
import Schedule1 from '../src/films/Schedule1';
import Schedule2 from '../src/films/Schedule2';
function App() {  
  return (
    <div className={styles.main}>
      <Header />
      <Body Schedule1={Schedule1} Schedule2={Schedule2}/>
    </div>
  );
}

export default App;
