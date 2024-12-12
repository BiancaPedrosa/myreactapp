import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [currentNumber, setCurrentNumber] = useState('0');

  const clean = () => {
    setCurrentNumber('0')
  };

  const clear = () => {
    setCurrentNumber(prev => prev.slice(1));
  };

  const back = () => {
    setCurrentNumber(prev => prev.slice(0, -1));
  };

  const insert = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }
  
  const calcular = () => {
    if (currentNumber !== '0') {
      try {
        const result = Function(`return ${currentNumber}`)();
        setCurrentNumber(result.toString());
      } catch (error) {
        // Handle errors, e.g., invalid expressions
        setCurrentNumber('Error');
      }
    }
  };

  return (
      <div className="calculator">
     
      <div className="mini-calculator">
        <h1>Calculadora</h1>
        <h4>by bpedrosa@ifsp.edu.br</h4>
        </div>
      <div id="display">{currentNumber}</div>
      <div className="calculator-buttons">
        <button onClick={clean}>CE</button>
        <button onClick={clear}>C</button>
        <button onClick={back}>DEL</button>
        <button className="operation-button" onClick={() => insert('/')}>/</button>
        <button onClick={() => insert('7')}>7</button>
        <button onClick={() =>insert('8')}>8</button>
        <button onClick={() =>insert('9')}>9</button>
        <button class="operation-button" onClick={() => insert('*')}>*</button>
        <button onClick={() => insert('4')}>4</button>
        <button onClick={() => insert('5')}>5</button>
        <button onClick={() => insert('6')}>6</button>
        <button className="operation-button" onClick={() => insert('-')}>-</button>
        <button onClick={() => insert('1')}>1</button>
        <button onClick={() => insert('2')}>2</button>
        <button onClick={() => insert('3')}>3</button>
        <button className="operation-button" onClick={() => insert('+')}>+</button>
        <button onClick={() => insert('+-')}>+-</button>
        <button onClick={() => insert('0')}>0</button>
        <button onClick={() => insert(',')}>,</button>
        <button className="operation-button" id="equals" onClick={calcular}>
          =
        </button>
      </div>
    </div>
    )
}

export default App
