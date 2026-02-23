import { useEffect, useState } from 'react';
import './App.css';
import Box from './Box.jsx';

function App() {

  const [hasWon, setHasWon] = useState(false);
  const [inputs, setInputs] = useState({
    guesses: [],
    currentInput: [],
    secretWord: "CLICK"
  });

  const wordList = ["CLICK", "PLANE", "CRANE", "BRICK", "SNAKE"];

  useEffect(() => {
    const handleKeyDown = (event) => {
      setInputs(prev => {

        if(event.key.length===1 && prev.currentInput.length<5 && /^[a-zA-Z]$/.test(event.key)){
          return {
            ...prev, 
            currentInput: [...prev.currentInput, event.key.toUpperCase()]
          }
        }
        else if(event.key === "Backspace"){
          return {
            ...prev,
            currentInput: prev.currentInput.slice(0, -1)
          }
        }
        else if(event.key === "Enter" && prev.currentInput.length === 5){
          return {
            ...prev,
            guesses: [...prev.guesses, prev.currentInput],
            currentInput: []
          }
        }
        else return prev;
      });
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if(inputs.guesses.length === 0 || hasWon) return;

    const lastGuess = inputs.guesses[inputs.guesses.length - 1].join("");
    
    if(lastGuess === inputs.secretWord){
      setHasWon(true);
    }
  }, [inputs.guesses, inputs.secretWord, hasWon]);
  

  const colorCalculator = (letter, ind) => {
    if(letter === inputs.secretWord[ind]) return "green";
    else if (inputs.secretWord.includes(letter)) return "yellow";
    else return "red";
  }

  const restartGame = () => {
    setHasWon(false);
    setInputs({
      guesses: [],
      currentInput: [],
      secretWord: wordList[[Math.floor(Math.random() * wordList.length)]]
    });
  }

  return (
    <div className="App">
      {
        (hasWon || inputs.guesses.length===5) && <div className='alert-row'>
          <div>
            {hasWon ? 
              "Congratulations! You've guessed the word!" : 
              `Game Over! The secret word was: ${inputs.secretWord}`
            }
          </div>
          <button onClick={restartGame}>Restart</button>
        </div>
      }
      {
        inputs.guesses.length > 0 && inputs.guesses.map((guess, rowInd) => (
          <div className='row' key={rowInd}>
            {
              guess.map((letter, ind) => (
                <Box key={ind} letter={letter} color={colorCalculator(letter, ind)}/>
              ))
            }
          </div>
        ))
      }
      <div className='row'>
        {
          (inputs.guesses.length < 5 && !hasWon) && Array.from({length: 5}).map((_, ind) => (
            <Box key={ind} letter={inputs.currentInput[ind] || ""}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
