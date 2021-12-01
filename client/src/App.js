import React, { useState } from "react";

const App = () => {
  const [state, setState] = useState([]);

  const getData = () => {
    fetch("http://localhost:3001/employees")
      .then((res) => res.json())
      .then((data) => setState(data))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1>Hello World</h1>
      <button onClick={getData}>Click Me!</button>
      <ul>
        {state.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </>
  );
};

export default App;
