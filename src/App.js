import { useState } from "react";
import Gusser from "./Components/Gusser";

const randomArr = () => {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(parseInt(Math.random() * 100));
  }
  return arr;
};
const correctIndex = () => {
  return parseInt(Math.random() * (3 - 0) + 0);
};
function App() {
  const [arr, setArr] = useState(randomArr());
  const [correctAns, setCorrectAns] = useState(correctIndex());

  return (
    <div className="App">
      <button
        onClick={(e) => {
          setArr(randomArr());
          setCorrectAns(correctIndex());
        }}
      >
        start again
      </button>
      <Gusser arr={arr} correctAns={correctAns} />
    </div>
  );
}

export default App;
