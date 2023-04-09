import React, {MouseEventHandler, useState} from 'react';

import styles  from "./Date.module.css"
import { IFilms }   from "../interfaces/Films"

interface Props {
  dia: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
 }

const Segunda : IFilms[] = []

const Body = ({dia, handleClick} : Props) => {


  return (
      <div >
        <button className={styles.dateButton} onClick={handleClick}>{dia}</button>
      </div>
  );
};

export default Body;