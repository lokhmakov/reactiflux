import { createContext } from 'react';
import { useReducer } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case `append`: {
      return state.concat(2);
    }
    default: {
      return state;
    }
  }
};

export const Screen = () => {
  const [arr, dispatch] = useReducer(reducer, [1]);
  const append = () => dispatch({ type: `append`, value: 100 });

  return (
    <button
      onClick={() => {
        console.log(`CLICK`);
        append();
      }}
    >
      {arr.length}
    </button>
  );
};
