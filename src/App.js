import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./data/aurthmaticsOperaction";


const App = () => {
  const counter =useSelector(state=>state.counter.value)
  const name =useSelector(state=>state.counter.name)
  const dispatch= useDispatch()
  return (
    <React.Fragment>
      <h1>Welcome to</h1>
      <div>running my first project</div>
      <div>how to run live website</div>
      <div>late response but it's possible how let's we do</div>
      {name}
      <button onClick={()=>{
        dispatch(increment());
        }}>+</button>
      {counter}
      <button onClick={()=>dispatch(decrement())}>-</button>
    </React.Fragment>
  );
}

export default App