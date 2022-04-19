import image from './img/bgg1.jpg';
import './App.css';
import React, {useState} from 'react';

function App() {
  let time= new Date().toLocaleTimeString();
  const [ctime,setCTime]=useState(time);
  const UpdateTime=() =>{
    time=new Date().toLocaleTimeString();
    setCTime(time);

  };
  setInterval(UpdateTime,1000);

  return (
    <div className="App" style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat"  }}>
      <header className="App-header">
        
        <h1>
          {ctime}
        </h1>
      </header>
    </div>
  );
}
// NOTE: here, we have created one digital clock using react hooks,here we have useDeferredValue, Date.toLocaleTimeString() 
// to get local real time. then using  useState to handle state, then inside UpdateTime we are changing the state 
// Now we need a callback function to call it in every second. setInterval is a js fn which takes callback fn name and interval
// in miliseconds. here, 1000 means 1sec, hence real time is updated.

export default App;
