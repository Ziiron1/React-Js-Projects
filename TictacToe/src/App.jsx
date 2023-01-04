import { useState, useEffect } from 'react';
import './styles.scss';

const winningCombinations = [
  // Horizontal
  { indexes: [0, 1, 2], orientation: 'horizontal' },
  { indexes: [3, 4, 5], orientation: 'horizontal' },
  { indexes: [6, 7, 8], orientation: 'horizontal' },

  // Vertical
  { indexes: [0, 3, 6], orientation: 'vertical' },
  { indexes: [1, 4, 7], orientation: 'vertical' },
  { indexes: [2, 5, 8], orientation: 'vertical' },

  // Diagonal
  { indexes: [0, 4, 8], orientation: 'diagonal-1' },
  { indexes: [2, 4, 6], orientation: 'diagonal-2' },
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
    checkGameEnded();
  }, [gameData]);

  useEffect(() => {
    if (winningCombo) {
      alert(`Jogador venceu !!`)
    }
  }, [winningCombo]);


  const checkGameEnded = () => {
    if (gameData.every((item) => item !== 0)) {
      alert('Jogo deu Velha!')
    }
  }


  const checkWinner = () => {
    let winner = null;

    for (let combination of winningCombinations) {
      const { indexes } = combination;
      console.log(indexes[0]);
      if (
        gameData[indexes[0]] === 1 &&
        gameData[indexes[1]] === 1 &&
        gameData[indexes[2]] === 1
      ) {
        winner = 'player 1'
      }

      if (
        gameData[indexes[0]] === 2 &&
        gameData[indexes[1]] === 2 &&
        gameData[indexes[2]] === 2
      ) {
        winner = 'player 2'
      }
      if (winner) {
        setWinningCombo(combination);
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
            className={
              winningCombo?.indexes.includes(index)
                ? winningCombo.orientation
                : undefined}
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
