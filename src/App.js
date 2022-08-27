// import { useSelector, useDispatch } from 'react-redux';
// import './App.css';

// function App() {
//   const counter = useSelector((state) => state.counter)
//   const dispatch = useDispatch();
//   const increment = () => {
//     dispatch({ type: 'INC' })

//   };

//   const decrement = () => {

//     dispatch({ type:'DEC'})

//   }

//   const addBy = () => {

//     dispatch({ type:'ADD',payload: 10})

//   }

//   return (
//     <div>

//       <h1>Counter App</h1>
//       <h2>{ counter }</h2>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={addBy}>Add by 10</button>
//     </div>
//   );
// }

// export default App;

// using Redux-js toolkit
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { actions } from './store/index'

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment())

  };

  const decrement = () => {

    dispatch(actions.decrement())

  }

  const addBy = () => {

    dispatch(actions.addBy(10))

  }

  const reset = () => {

    dispatch(actions.reset())

  }



  return (
 
 
    <div>
       <div className='counter'>
      <h1>Counter App</h1>
      <h2>{ counter }</h2>
      <button id='inc' onClick={increment}>Increment</button>
      <button id='dec' onClick={decrement}>Decrement</button>
      <button id='add' onClick={addBy}>Add by 10</button>
      <button id='reset' onClick={reset}>Reset Count</button>
    </div>
    </div>
  );
}

export default App;

