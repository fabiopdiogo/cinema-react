import React, {MouseEventHandler, useState} from 'react';

import styles  from "./Date.module.css"

interface Props {
  dia: string;
  handleClick (show: string): void;
  show : string;
}


const Body = ({dia,handleClick,show} : Props) => {

  return (
      <div>
        <button className={styles.dateButton} onClick= { () => handleClick(show)}>{dia}</button>
      </div>
  );

};

export default Body;