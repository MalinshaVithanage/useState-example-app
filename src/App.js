import React, { useState } from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() { 
  const[count, setCount]=useState(4)
  
  function decrementCount(){
    setCount(count-1)
  }
  function incrementCount(){
    setCount(count+1)
  }
  return (
    
    <div className="d-flex justify-content-center align-items-center mt-5">
        <button type="button" class="btn btn-outline-danger bg-danger-subtle w-25 p-2 mr-1 border-secondary" onClick={decrementCount}>-</button>  
    <span className='mr-1 '>{count}</span>
    <button type="button" class="btn btn-outline-success bg-success-subtle w-25 p-2 border-secondary " onClick={incrementCount}>+</button> 
    </div>
  );
}

export default App;
