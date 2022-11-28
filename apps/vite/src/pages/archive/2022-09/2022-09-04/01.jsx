import * as React from 'react';

export function Screen() {
  return <Wordle />;
}

const WorddleContext = React.createContext();

const defaultArray = (length) => Array.from({ length });

function Wordle() {
  const [length, setLength] = React.useState(5);
  const [check, setCheck] = React.useState(defaultArray(length));
  const [guess, setGuess] = React.useState(defaultArray(length));
  const [word, setWord] = React.useState('');
  const [row, setRow] = React.useState(0);
  const [col, setCol] = React.useState(0);

  React.useEffect(() => {
    setWord('');
    document.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        for (let i = 0; i < guess[0].length; i++) {
          check[row][i] = 'correct';
        }
      } else if (e.key === 'Backspace') {
        if (col > 0) {
          guess[row][col] = '';
          setCol(col - 1);
          setGuess(guess);
        }
      } else if (e.key.toUpperCase().match(/[A-Z]/i)) {
        guess[row][col] = e.key.toUpperCase();
        setCol(col + 1);
        setGuess(guess);
      }
    });
  }, []);

  React.useEffect(() => {
    setGuess(defaultArray(length));
    setCheck(defaultArray(length));
    setCol(0);
    setRow(0);
  }, [length]);

  //drop down menu to select length of word

  return (
    <WorddleContext.Provider value={{ check }}>
      <div className="wordle">
        {guess.map((row, index) => {
          return (
            <div className="tries" key={index}>
              {row.map((value, indexCol) => {
                return (
                  <Cell
                    value={value}
                    state={[index, indexCol]}
                    key={`${index} ${indexCol}`}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <div>
        <select
          onChange={(e) => {
            setLength(Number(e.target.value));
          }}
        >
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>
      </div>
    </WorddleContext.Provider>
  );
}

function Cell({ value, state }) {
  const { check } = React.useContext(WorddleContext);

  return <p className={'cell ' + check[state[0]][state[1]]}>{value}</p>;
}
