import "./Tiles.css";
import Keyboard from "../Keyboard/Keyboard";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const Tiles = () => {
  const [answer, setAnswer] = useState("ADZES");
  const [guess, setGuess] = useState([]);
  const [tile, setTile] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ]);

  useEffect(() => {
    getRandomWordFromBank();
  }, []);

  const getRandomWordFromBank = () => {
    let randomNumber = Math.floor(Math.random() * 663);
    fetch("word-bank.json")
      .then((res) => res.json())
      .then((data) => {
        let randomWord = data[randomNumber];
        console.log(randomWord.toUpperCase());
        setAnswer(randomWord.toUpperCase());
      });
  };

  

  const guessLetters = (letterObj) => {
    const arr = [...guess];

    let letterObjCopy = { ...letterObj };

    letterObjCopy.coloR = "";

    if (arr.length > 29) {
      return;
    } else {
      arr.push(letterObjCopy);
      setGuess(arr);
      deleteTile();
    }
  };
  const removeLetters = () => {
    const arr = [...guess];
    arr.pop();
    setGuess(arr);
    addTile();
  };

  const addTile = () => {
    let numArr = [...tile];
    if (numArr.length < 30) {
      numArr.push(1);

      setTile(numArr);
    }
  };
  const deleteTile = () => {
    let numArr = [...tile];
    numArr.pop();
    setTile(numArr);
  };

  return (
    <div>
      <div className="tiles-container">
        <div className="tile-board">
          {guess.map((e, i) => (
            <div className="tile" key={i} style={{ background: e.coloR }}>
              {e.lettR}
            </div>
          ))}
          {tile.map((e, i) => (
            <div className="tile" key={i}>
              {``}
            </div>
          ))}
        </div>
      </div>
      <Keyboard
        setGuess={setGuess}
        guessLetters={guessLetters}
        removeLetters={removeLetters}
        answer={answer}
        guess={guess}
      />
    </div>
  );
};

export default Tiles;
