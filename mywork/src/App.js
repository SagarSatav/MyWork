import { useState } from 'react';
import './App.css';


function App() {
  const [result, setResult] = useState("")
  const [input, setInput] = useState('');

  const handleClick = (e) => {
    clear()
    setResult(result.concat(e.target.name));
    
  }

  const clear = () => {
    setResult("")
    setInput("")

  }
  const backspace = () => {
    setResult(result.slice(0, -1));
  }

  const calculate = () => {
    // clear()
    setResult(eval(result).toString());
    
    setInput(eval(result))
    
    

  }
  document.title="calculator";

  

  return (
    <div className="App">
      <div className="container">
        <form>
          Welcome to my calculator
          <div style={{fontSize:'20px', fontWeight:'bold'}}>  Sagar is here to welcome you</div>
        
          <input type="text" value={result} readOnly />
          <input type="text" value={input} readOnly />
        </form>
        <div className='keypad'>
          <button className='btn' id="clear" onClick={clear} >Clear</button>
          <button className='btn' id="backspace" onClick={backspace}>C</button>
          <button name="/" className='btn' id="div" onClick={handleClick}>&divide;</button>
          <button name="7" className='btn' onClick={handleClick}>7</button>
          <button name="8" className='btn' onClick={handleClick}>8</button>
          <button name="9" className='btn' onClick={handleClick}>9</button>
          <button name="*" className='btn' id="mul" onClick={handleClick}>&times;</button>
          <button name="4" className='btn' onClick={handleClick}>4</button>
          <button name="5" className='btn' onClick={handleClick}>5</button>
          <button name="6" className='btn' onClick={handleClick}>6</button>
          <button name="-" className='btn' id="sub" onClick={handleClick}>&ndash;</button>
          <button name="1" className='btn' onClick={handleClick}>1</button>
          <button name="2" className='btn' onClick={handleClick}>2</button>
          <button name="3" className='btn' onClick={handleClick}>3</button>
          <button name="+" className='btn' id="add" onClick={handleClick}>+</button>
          <button name="0" className='btn' onClick={handleClick}>0</button>
          <button name="." className='btn' onClick={handleClick}>.</button>
          <button className='btn' id="result" onClick={calculate}>=</button>

        </div>
      </div>
    </div>
  );
}

export default App;
