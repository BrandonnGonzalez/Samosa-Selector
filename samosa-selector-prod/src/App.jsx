import './App.css';
import { useState } from 'react';
const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => {
    setCount(count + multiplier);
  }
  const buyDoubledStuffed = () => {
    if (count >= 10) {
      setCount(multiplier * 2);
      setCount(count - 10);
    }
  }
  const buyPartyPack = () => {
    if (count >= 100) {
      setCount(multiplier * 5);
      setCount(count - 100);
    }
  }
  const buyFullFeast = () => {
    if (count >= 1000) {
      setCount(multiplier * 10);
      setCount(count - 1000);
    }
  }

  return (
    <div className="App">

      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className="samosa" src="https://png.pngtree.com/png-vector/20240717/ourmid/pngtree-crispy-and-tasty-samosa-clipart-illustration-png-image_13134992.png" onClick={updateCount}/>
      </div>
      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed </h3>
          <p>2x per click</p>
          <button onClick={buyDoubledStuffed}>10 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Party Pack </h3>
          <p>5x per click</p>
          <button onClick={buyPartyPack}>100 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Full Feast </h3>
          <p>10x per click</p>
          <button onClick={buyFullFeast}>1000 samosas</button>
        </div>
      </div>

    </div> // end app div
  )
}

export default App;