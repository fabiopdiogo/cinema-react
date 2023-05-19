import React, {useState} from 'react';
import Header from '../src/components/Header';
import Body from '../src/components/Body'

import styles from './styles/App.module.css'

import Schedule1 from '../src/films/Schedule1';
import Schedule2 from '../src/films/Schedule2';
import Menu from './components/Menu/Menu';
function App() {  
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <div className={styles.main}>
        <Menu
         menuIsVisible={menuIsVisible}
         setMenuIsVisible={setMenuIsVisible}         
         />
      <Header setMenuIsVisible={setMenuIsVisible}/>
      <Body Schedule1={Schedule1} Schedule2={Schedule2}/>
    </div>
  );
}

export default App;
