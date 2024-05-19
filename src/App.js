import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  incrementWithAmount,
} from "./redux/counterSlice";
import { useState } from "react";

function App() {
  //MEMO:とってきてるのはstore.jsから
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("3");

  return (
    <div className="App">
      <h1>count: {count}</h1>
      <input
        onChange={(e) => setIncrementAmount(e.target.value)}
        value={incrementAmount}
      />
      <button onClick={() => dispatch(increment())}>＋</button>
      <button onClick={() => dispatch(decrement())}>ー</button>
      <button
        onClick={() => {
          dispatch(incrementWithAmount(Number(incrementAmount)));
        }}
      >
        追加
      </button>
    </div>
  );
}

export default App;
