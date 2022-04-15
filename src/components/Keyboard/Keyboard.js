import "./Keyboard.css";
import { FiDelete } from "react-icons/fi";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Keyboard = ({ guessLetters, removeLetters, answer, guess, setGuess }) => {
  const [wordBank, setWordBank] = useState();
  const [letters, setLetters] = useState([
    {
        "lettR": "Q",
        "coloR": ""
    },
    {
        "lettR": "W",
        "coloR": ""
    },
    {
        "lettR": "E",
        "coloR": ""
    },
    {
        "lettR": "R",
        "coloR": ""
    },
    {
        "lettR": "T",
        "coloR": ""
    },
    {
        "lettR": "Y",
        "coloR": ""
    },
    {
        "lettR": "U",
        "coloR": ""
    },
    {
        "lettR": "I",
        "coloR": ""
    },
    {
        "lettR": "O",
        "coloR": ""
    },
    {
        "lettR": "P",
        "coloR": ""
    },
    {
        "lettR": "A",
        "coloR": ""
    },
    {
        "lettR": "S",
        "coloR": ""
    },
    {
        "lettR": "D",
        "coloR": ""
    },
    {
        "lettR": "F",
        "coloR": ""
    },
    {
        "lettR": "G",
        "coloR": ""
    },
    {
        "lettR": "H",
        "coloR": ""
    },
    {
        "lettR": "J",
        "coloR": ""
    },
    {
        "lettR": "K",
        "coloR": ""
    },
    {
        "lettR": "L",
        "coloR": ""
    },
    {
        "lettR": "Z",
        "coloR": ""
    },
    {
        "lettR": "X",
        "coloR": ""
    },
    {
        "lettR": "C",
        "coloR": ""
    },
    {
        "lettR": "V",
        "coloR": ""
    },
    {
        "lettR": "B",
        "coloR": ""
    },
    {
        "lettR": "N",
        "coloR": ""
    },
    {
        "lettR": "M",
        "coloR": ""
    }
]);

  useEffect(() => {
    getWordBank();
    
  }, []);

  const getWordBank = async () => {
    const response = await fetch("word-bank.json");
    const wordBanks = await response.json();
    

    setWordBank(wordBanks);
  };

  const changeColor = (arr) => {
    console.log(answer);
    let guessCopy = [...arr];

    let answerCopy = [...answer];

    let answerObjects = answerCopy.map((e) => ({
      lettR: e,
      coloR: "",
    }));

    let setArray = [0, 1, 2, 3, 4];

    let index0 = guessCopy.findIndex((e) => e.lettR === answerObjects[0].lettR);
    let index1 = guessCopy.findIndex((e) => e.lettR === answerObjects[1].lettR);
    let index2 = guessCopy.findIndex((e) => e.lettR === answerObjects[2].lettR);
    let index3 = guessCopy.findIndex((e) => e.lettR === answerObjects[3].lettR);
    let index4 = guessCopy.findIndex((e) => e.lettR === answerObjects[4].lettR);

    let indexArr = [index0, index1, index2, index3, index4];

    console.log("indexArr:", indexArr);

    const result = indexArr.filter((e) => e !== -1);

    console.log("result:", result);

    for (let i = 0; i < 5; i++) {
      if (answerObjects[i].lettR === guessCopy[i].lettR) {
        guessCopy[i].coloR = "green";
      }
    }

    if (result.length === 1 && guessCopy[result[0]].coloR !== "green") {
      guessCopy[result[0]].coloR = "orange";
    } else if (result.length === 2) {
      guessCopy[result[0]].coloR = "orange";
      guessCopy[result[1]].coloR = "orange";
    } else if (result.length === 3) {
      guessCopy[result[0]].coloR = "orange";
      guessCopy[result[1]].coloR = "orange";
      guessCopy[result[2]].coloR = "orange";
    } else if (result.length === 4) {
      guessCopy[result[0]].coloR = "orange";
      guessCopy[result[1]].coloR = "orange";
      guessCopy[result[2]].coloR = "orange";
      guessCopy[result[3]].coloR = "orange";
    } else if (result.length === 5) {
      guessCopy[result[0]].coloR = "orange";
      guessCopy[result[1]].coloR = "orange";
      guessCopy[result[2]].coloR = "orange";
      guessCopy[result[3]].coloR = "orange";
      guessCopy[result[4]].coloR = "orange";
    }

    for (let i = 0; i < 5; i++) {
      if (answerObjects[i].lettR === guessCopy[i].lettR) {
        guessCopy[i].coloR = "green";
      }
    }
    for (let i = 0; i < 5; i++) {
      if(guessCopy[i].coloR === ''){
        guessCopy[i].coloR = 'transparent'
      }
    }

    let lettersCopy = [...letters];
    
    for (let i = 0; i <lettersCopy.length; i++){
        if(guessCopy[0].lettR === lettersCopy[i].lettR){
            lettersCopy[i].coloR = guessCopy[0].coloR
          }
          if(guessCopy[1].lettR === lettersCopy[i].lettR){
              lettersCopy[i].coloR = guessCopy[1].coloR
            }
            if(guessCopy[2].lettR === lettersCopy[i].lettR){
                lettersCopy[i].coloR = guessCopy[2].coloR
              }
              if(guessCopy[3].lettR === lettersCopy[i].lettR){
                  lettersCopy[i].coloR = guessCopy[3].coloR
                }
                if(guessCopy[4].lettR === lettersCopy[i].lettR){
                    lettersCopy[i].coloR = guessCopy[4].coloR
                  }
                }
                
    // for (let i = 0; i <lettersCopy.length; i++){
    //   lettersCopy[i].coloR = ''
    // }
    // console.log('lettersCopy:', lettersCopy)
    

    setLetters(lettersCopy);

    return guessCopy;
  };

  const checkLetters = () => {
    let guessArr = [...guess];
    if (guessArr.length < 5) {
      toast("Please Enter A 5-Letter Word", { position: "", duration: 3000 });
      return;
    }

    let firstGuessArr = [];
    let secondGuessArr = [];
    let thirdGuessArr = [];
    let fourthGuessArr = [];
    let fifthGuessArr = [];
    let sixthGuessArr = [];
    

    if (guessArr.length === 5) {
      for (let i = 0; i < 5; i++) {
        firstGuessArr.push(guessArr[i]);
      }
      let success = false;

      let word = checkIfWordExists(firstGuessArr);

      if (word === true) {
        let guessOne = changeColor(firstGuessArr);

        setGuess(guessOne);

        for (let i = 0; i < 5; i++) {
          if (guessOne[i].coloR === "green") {
            success = true;
          }
        }
        if (success === true) {
          toast.success("You Got It In One Try!", {
            position: "",
            duration: 4000,
          });
        }
      } else {

        toast.error("Word Not Found!", { position: "", duration: 4000 });
      }
    }

    if (guessArr.length === 10) {
      for (let i = 0; i < 5; i++) {
        firstGuessArr.push(guessArr[i]);
      }
      for (let i = 5; i < 10; i++) {
        secondGuessArr.push(guessArr[i]);
      }
      let success = false;

      let word = checkIfWordExists(secondGuessArr);

      if (word === true) {
        let guessOne = changeColor(firstGuessArr);
        let guessTwo = changeColor(secondGuessArr);

        let combined = [...guessOne, ...guessTwo];

        setGuess(combined);

        for (let i = 0; i < 5; i++) {
          if (guessTwo[i].coloR === "green") {
            success = true;
          }
        }
        if (success === true) {
          toast.success("You Got It In Two Tries!", {
            position: "",
            duration: 4000,
          });
        }
      } else {
        toast.error("Word Not Found!", { position: "", duration: 4000 });
      }
    }

    if (guessArr.length === 15) {
      for (let i = 0; i < 5; i++) {
        firstGuessArr.push(guessArr[i]);
      }
      for (let i = 5; i < 10; i++) {
        secondGuessArr.push(guessArr[i]);
      }
      for (let i = 10; i < 15; i++) {
        thirdGuessArr.push(guessArr[i]);
      }

      let success = false;
      let word = checkIfWordExists(thirdGuessArr);

      if (word === true) {
        let guessOne = changeColor(firstGuessArr);
        let guessTwo = changeColor(secondGuessArr);
        let guessThree = changeColor(thirdGuessArr);

        let combined = [...guessOne, ...guessTwo, ...guessThree];

        setGuess(combined);

        for (let i = 0; i < 5; i++) {
          if (guessThree[i].coloR === "green") {
            success = true;
          }
        }
        if (success === true) {
          toast.success("You Got It In Three Tries!", {
            position: "",
            duration: 4000,
          });
        }
      } else {
        toast.error("Word Not Found!", { position: "", duration: 4000 });
      }
    }
    if (guessArr.length === 20) {
      for (let i = 0; i < 5; i++) {
        firstGuessArr.push(guessArr[i]);
      }
      for (let i = 5; i < 10; i++) {
        secondGuessArr.push(guessArr[i]);
      }
      for (let i = 10; i < 15; i++) {
        thirdGuessArr.push(guessArr[i]);
      }
      for (let i = 15; i < 20; i++) {
        fourthGuessArr.push(guessArr[i]);
      }

      let success = false;
      let word = checkIfWordExists(fourthGuessArr);

      if (word === true) {
        let guessOne = changeColor(firstGuessArr);
        let guessTwo = changeColor(secondGuessArr);
        let guessThree = changeColor(thirdGuessArr);
        let guessFour = changeColor(fourthGuessArr);

        let combined = [...guessOne, ...guessTwo, ...guessThree, ...guessFour];

        setGuess(combined);

        for (let i = 0; i < 5; i++) {
          if (guessFour[i].coloR === "green") {
            success = true;
          }
        }
        if (success === true) {
          toast.success("You Got It In Four Tries!", {
            position: "",
            duration: 4000,
          });
        }
      } else {
        toast.error("Word Not Found!", { position: "", duration: 4000 });
      }
    }
    if (guessArr.length === 25) {
      for (let i = 0; i < 5; i++) {
        firstGuessArr.push(guessArr[i]);
      }
      for (let i = 5; i < 10; i++) {
        secondGuessArr.push(guessArr[i]);
      }
      for (let i = 10; i < 15; i++) {
        thirdGuessArr.push(guessArr[i]);
      }
      for (let i = 15; i < 20; i++) {
        fourthGuessArr.push(guessArr[i]);
      }
      for (let i = 20; i < 25; i++) {
        fifthGuessArr.push(guessArr[i]);
      }

      let success = false;
      let word = checkIfWordExists(fifthGuessArr);

      if (word === true) {
        let guessOne = changeColor(firstGuessArr);
        let guessTwo = changeColor(secondGuessArr);
        let guessThree = changeColor(thirdGuessArr);
        let guessFour = changeColor(fourthGuessArr);
        let guessFive = changeColor(fifthGuessArr);

        let combined = [
          ...guessOne,
          ...guessTwo,
          ...guessThree,
          ...guessFour,
          ...guessFive,
        ];

        setGuess(combined);

        for (let i = 0; i < 5; i++) {
          if (guessFive[i].coloR === "green") {
            success = true;
          }
        }
        if (success === true) {
          toast.success("You Got It In Five Tries!", {
            position: "",
            duration: 4000,
          });
        }
      } else {
        toast.error("Word Not Found!", { position: "", duration: 4000 });
      }
    }
    if (guessArr.length === 30) {
      console.log(guessArr);
      for (let i = 0; i < 5; i++) {
        firstGuessArr.push(guessArr[i]);
      }
      for (let i = 5; i < 10; i++) {
        secondGuessArr.push(guessArr[i]);
      }
      for (let i = 10; i < 15; i++) {
        thirdGuessArr.push(guessArr[i]);
      }
      for (let i = 15; i < 20; i++) {
        fourthGuessArr.push(guessArr[i]);
      }
      for (let i = 20; i < 25; i++) {
        fifthGuessArr.push(guessArr[i]);
      }
      for (let i = 25; i < 30; i++) {
        sixthGuessArr.push(guessArr[i]);
      }

      let success = false;
      let word = checkIfWordExists(sixthGuessArr);

      if (word === true) {
        let guessOne = changeColor(firstGuessArr);
        let guessTwo = changeColor(secondGuessArr);
        let guessThree = changeColor(thirdGuessArr);
        let guessFour = changeColor(fourthGuessArr);
        let guessFive = changeColor(fifthGuessArr);
        let guessSix = changeColor(sixthGuessArr);

        let combined = [
          ...guessOne,
          ...guessTwo,
          ...guessThree,
          ...guessFour,
          ...guessFive,
          ...guessSix,
        ];

        setGuess(combined);

        for (let i = 0; i < 5; i++) {
          if (guessSix[i].coloR === "green") {
            success = true;
          }
        }
        if (success === true) {
          toast.success("You Got It In Six Tries!", {
            position: "",
            duration: 4000,
          });
        }
      } else {
        toast.error("Word Not Found!", { position: "", duration: 4000 });
      }
    }
  };

  const checkIfWordExists = (arr) => {
    let letters = arr.map((e) => e.lettR).join("");
    console.log(letters);

    // JSON to UpperCase Func
    // let upperCase = wordBank.map(word => word.toUpperCase())
    // console.log('upperCase:', upperCase)

    let result = wordBank.filter((word) => word === letters);

    if (result.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="keyboard-container">
      <div className="keyboard-row-container">
        <div className="row-1-container">
          {letters.slice(0, 10).map((letter, index) => (
            <button
              key={letter.lettR}
              className="keyboard-btns"
              onClick={() => guessLetters(letters[index])}
              style={{ background: letter.coloR }}
            >
              {letter.lettR}
            </button>
          ))}
        </div>
        <div className="row-2-container">
          {letters.slice(10, 19).map((letter, index) => (
            <button
              key={letter.lettR}
              className="keyboard-btns"
              onClick={() => guessLetters(letters[index + 10])}
              style={{ background: letter.coloR }}
            >
              {letter.lettR}
            </button>
          ))}
        </div>
        <div className="row-3-container">
          <button
            className="keyboard-action-btns"
            onClick={() => checkLetters()}
          >
            Enter
          </button>
          {letters.slice(19, 26).map((letter, index) => (
            <button
              key={letter.lettR}
              className="keyboard-btns"
              onClick={() => guessLetters(letters[index + 19])}
              style={{ background: letter.coloR }}
            >
              {letter.lettR}
            </button>
          ))}
          <div className="delete-icon">
            <FiDelete onClick={() => removeLetters()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
