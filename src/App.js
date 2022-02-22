import './App.css';
//useSelector is used to select piece of state from store and use it in our component
//useDispatch is used to dispatch an action
import {useDispatch, useSelector} from 'react-redux';
//import actions
import {decrement, increment, increaseAmount} from './redux/slices/counterSlices'
import { compose } from '@reduxjs/toolkit';

function App() {
  const dispatch = useDispatch()
  const counter = useSelector((state)=>state?.counter)
  //console.log(counter);
  console.log("changes  in feature branch");
  console.log(counter);
  console.log("added changes in master 'm2'");
  return (
    
    <div className="App">
      <h1>Hello</h1>  
      <h2>Counter: {counter?.value}</h2>
      <button onClick= {()=>{dispatch(increment())}}>+</button>
      <button onClick= {()=>{dispatch(decrement())}}>-</button>
      <button onClick= {()=>{dispatch(increaseAmount(20))}}>Increase Amount</button>
    </div>
  );
}

export default App;
