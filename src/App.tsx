import React, {useState} from 'react';
import Header from './components/Header';
import Body from './components/Body'

import styles from './App.module.css'

import { IFilms } from "../src/interfaces/Films"
import Qua from './films/Qua';

function App() {  
  return (
    <div className={styles.main}>
      <Header />
      <Body Qua={Qua}/>
    </div>
  );
}

export default App;
