import React, {useState} from 'react';

import styles  from "./Date.module.css"
import { IFilm }   from "../interfaces/Films"

interface Props {
  dia: string;
 }

const Segunda : IFilm[] = []
const Body = ({dia} : Props) => {



  return (
      <div >
        <button className={styles.dateButton}>{dia}</button>
      </div>
  );
};

export default Body;