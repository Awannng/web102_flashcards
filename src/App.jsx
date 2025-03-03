import React, { useState } from "react";
import vocab from "./vocabulary";

const App = () => {
  const [count, setCount] = useState(0);
  const [flip, setFlip] = useState(false);
  const vocabs = vocab[count];

  const nextCard = () => {
    setCount((prevCount) => (prevCount + 1) % vocab.length);
    setFlip(false);
  };
  const backCard = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    setFlip(false);
  };

  const handelFlip = () => {
    setFlip(!flip);
  };
  return (
    <>
      <div className="container">
        <div>
          <h1>Explore the Japense language!!!</h1>
          <h2>
            Try to memorize the vocabularies that is being used in daily
            conversation!
          </h2>
          <h2>
            {count + 1} / {vocab.length}
          </h2>
        </div>

        {/* Display the flashcards */}
        <div className="card" onClick={handelFlip}>
          <div className="card_inner">
            <div className={flip ? "hide" : ""}>
              <p>{vocabs.japanese}</p>
              <p>{vocabs.romanji}</p>
              <img src={vocabs.pic} alt="a image of the vocabulary" height="100px" width="100px" />
            </div>

            <p>{flip && vocabs.english}</p>
          </div>
        </div>

        {/* Buttons for going back and forth */}
        <div className="container_button">
          <button onClick={backCard}>Back</button>
          <button onClick={nextCard}>Next</button>
        </div>
      </div>
    </>
  );
};

export default App;
