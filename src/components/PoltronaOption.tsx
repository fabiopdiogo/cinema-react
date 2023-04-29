import React from 'react';

import styles from "./PoltronaOption.module.css"
const PoltronaOption = (value : string) => {
  return(
    <button className={styles.poltrona}>
     {value}
    </button>
  )
}

export default PoltronaOption;