import React, {useState} from 'react';
import './App.css';

const App =()=> {

  const [number1, setNumber1] =useState('');
  const [number2, setNumber2] =useState('');
  const [total, setTotal] =useState('');

  const getData =(event)=>{
    setNumber1(+event.target.value);
  }

   const getData1 =(event)=>{
    setNumber2(+event.target.value);
  }

  const handlerEvent = (event)=>{
    event.preventDefault();
    setTotal(number1 + number2);
  }
  return (
    <div className="App">
    <h2>React Addition of Two Numbers </h2>
    <form onSubmit={handlerEvent}>
    <div><label>Value 1</label><input type="text" value={number1} onChange={getData}/></div>
    <div><label>Value 2</label><input type="text" value={number2} onChange={getData1}/></div>
    <button type="submit">Total Value</button>
    </form>
      <h2>{total}</h2>
    </div>
  );
}

export default App;
