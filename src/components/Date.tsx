import React, {MouseEventHandler, useState} from 'react';

import styles  from "./Date.module.css"
import { IFilms }   from "../interfaces/Films"

interface Props {
  dia: string;
  handleClick(dia: string): void;
 }


const Body = ({dia, handleClick} : Props) => {

  return (
      <div >
        <button className={styles.dateButton} onClick={() => handleClick(dia)}>{dia}</button>
      </div>
  );
};

export default Body;