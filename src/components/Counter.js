//Function based component example with hooks
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
//Class based component example w/o hooks
// import { Component } from "react";
// import { useSelector, useDispatch, connect } from "react-redux";

import classes from "./Counter.module.css";

//Function based component example with hooks
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toogleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

//Class based component example w/o hooks
// class Counter extends Component {
//   incrementHandler = () => {
//     this.props.increment();
//   };
//   decrementHandler = () => {
//     this.props.decrement();
//   };

//   toggleCounterHandler = () => {};
//   render() {
//     return (
//       <div>
//         <main className={classes.counter}>
//           <h1>Redux Counter</h1>
//           <div className={classes.value}>{this.props.counter}</div>
//           <div>
//             <button onClick={this.incrementHandler.bind(this)}>
//               Increment
//             </button>
//             <button onClick={this.decrementHandler.bind(this)}>
//               Decrement
//             </button>
//           </div>
//           <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//         </main>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
