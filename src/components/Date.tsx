import React from 'react';

import styles  from "./Date.module.css"
import { ITask } from "../interfaces/Task"

interface Props {
  dia: string;
 }


const Body = ({dia} : Props) => {
  return (
      <div className={styles.dateButton}>
        <button>{dia}</button>
      </div>
  );
};

export default Body;