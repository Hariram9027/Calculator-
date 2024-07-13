import React, { useState } from 'react';
import Display from './components/Display';
import styles from './App.module.css';
import Buttons from './components/ButtonsContainer';
function App() {
  let [calVal, setCalVal] = useState("");
  const onButtonClick = (buttontext) =>
    {
      if(buttontext === 'C'){
        setCalVal(" ");
      }
      else if(buttontext === '='){
        const result = eval(calVal);
        setCalVal(result);
      }else
      {
        const newDisplayvalue = calVal + buttontext;
        setCalVal(newDisplayvalue);
      }
    }
    
  return (
    <div className={styles.calculator}>
        <Display calVal={calVal}> </ Display>
        <Buttons onButtonClick={onButtonClick}></Buttons> 
    </div>
  );
}

export default App;
