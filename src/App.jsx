import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const nextCard = () => {
    if (count < 9) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };
  const backCard = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="container">
        <div>
          <h1>Explore the Japense language!!!</h1>
          <p>Try to memorize the vocabularies that is used in daily life!</p>
          <p> {count + 1} / 10</p>
        </div>

        <div className="card">
          
        </div>

        <div className="container_button">
          <button onClick={backCard}>Back</button>
          <button onClick={nextCard}>Next</button>
        </div>
      </div>
    </>
  );
};

export default App;
