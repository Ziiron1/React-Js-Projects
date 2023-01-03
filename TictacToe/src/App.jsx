import { useState, useEffect } from 'react';
import './styles.scss';

const winningCombinations = [
  // Horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // Vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // Diagonal
  [0, 4, 8],
  [2, 4, 6],
]



function App() {
  const [gameData, setGameData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [turn, setTurn] = useState(1);
  const [winningCombo, setWinningCombo] = useState(null);

  const handleClick = (clickedIndex) => {
    console.log(clickedIndex)

    if (gameData[clickedIndex] !== 0) {
      return;
    }
    if (winningCombo) {
      return;
    }


    setGameData((prev) => {
      const newGameData = [...prev];
      newGameData[clickedIndex] = turn;
      return newGameData;
    });

    setTurn((prev) => prev === 1 ? 2 : 1);

  };


  useEffect(() => {
    checkWinner();
  }, [gameData]);

  useEffect(() => {
    if (winningCombo) {
      alert(`Jogador venceu !!`)
    }
  }, [winningCombo]);

  const checkWinner = () => {
    let winner = null;

    for (let values of winningCombinations) {
      console.log(values[0]);
      if (
        gameData[values[0]] === 1 &&
        gameData[values[1]] === 1 &&
        gameData[values[2]] === 1
      ) {
        winner = 'player 1'
      }

      if (
        gameData[values[0]] === 2 &&
        gameData[values[1]] === 2 &&
        gameData[values[2]] === 2
      ) {
        winner = 'player 2'
      }
      if (winner) {
        setWinningCombo(values);
        break;
      }
    }

    console.log({ winner })
  }

  return (
    <>
      <div className='board-game'>
        {gameData.map((value, index) => (
          <span
            onClick={() => {
              handleClick(index);
            }}
            key={index}
          >
            <abbr title="">{index}</abbr>
            {value === 1 && '❌'}
            {value === 2 && '⭕'}
          </span>
        ))}
      </div>
    </>
  );
}

export default App;
