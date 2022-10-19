import react, { useState } from "react";

const Gusser = (props) => {
  let { arr, correctAns } = props;
  const [correctCounter, setCorrectCounter] = useState(0);
  const [wrongCounter, setWrongCounter] = useState(0);

  return (
    <>
      {arr.map((ele, index) => {
        return (
          <button
            key={index}
            id={index}
            onClick={(e) => {
              return e.target.id == correctAns
                ? setCorrectCounter(correctCounter + 1)
                : setWrongCounter(wrongCounter + 1);
            }}
          >
            {ele}
          </button>
        );
      })}
    </>
  );
};

export default Gusser;
