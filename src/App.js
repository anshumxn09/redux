import React from 'react'
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/ButtonActions';

const App = () => {
  const myValues = useSelector( (state) => state.handleClicks);
  const dispatch = useDispatch();

  return (
    <div className="mainContainer">
      <button type='button' onClick={() => dispatch(decrement())}>-</button>
      <p className='value'>{myValues}</p>
      <button type='button' onClick={() => dispatch(increment())}>+</button>
    </div>
  )
}

export default App;