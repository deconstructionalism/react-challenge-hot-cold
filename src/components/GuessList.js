import React from 'react';

export default function GuessList(props) {
  const guesses = props.guesses.map((guess, index) => (
    <li key={index}>
      {guess}
    </li>
  ));

  return (
    <ul>
      {guesses}
    </ul>
  );
}
