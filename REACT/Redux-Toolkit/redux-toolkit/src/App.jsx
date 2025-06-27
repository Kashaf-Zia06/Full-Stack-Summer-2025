import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import actions from our slice
import { decrement, increment, incrementByAmount, reset } from './features/counter/CounterSlice';

import './App.css';

function App() {
  // Getting state value from the Redux store
  const count = useSelector((state) => state.counter.value);

  // Local state to handle user input for incrementing by a specific value
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();

  // Dispatch simple increment
  const handleInc = () => {
    dispatch(increment());
  };

  // Dispatch simple decrement
  const handleDec = () => {
    dispatch(decrement());
  };

  // Dispatch reset to 0
  const handleReset = () => {
    dispatch(reset());
  };

  // Dispatch increment by a user-entered amount
  const handleAmount = () => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <>
      <h1>COUNTER USING REDUX TOOLKIT</h1>
      <div className="container">
        <button className="btn" onClick={handleInc}>+</button>
        <p>Count: {count}</p>
        <button className="btn" onClick={handleDec}>-</button>
        <br />
        <button className="btn" onClick={handleReset}>Reset</button>

        <input
          className="inp"
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="amt btn" onClick={handleAmount}>
          Change by amount
        </button>
      </div>
    </>
  );
}

export default App;
