import React, {useEffect, useState} from 'react';

import './App.css';

function App() {
  const [date, setDate] = useState(new Date())

  useEffect(()=>{
    setInterval(() => {
      setDate(new Date())
    }, 1000)
  }, [])


    const convertsToTwoDigitValue = (date: number) => {
      if(date < 10){
          return '0' + date
      }
      return date
    }

  return (
    <div className="App">
      <span>{convertsToTwoDigitValue(date.getHours())}</span><span> : </span>
      <span>{convertsToTwoDigitValue(date.getMinutes())}</span><span> : </span>
      <span>{convertsToTwoDigitValue(date.getSeconds())}</span>
    </div>
  );
}

export default App;
