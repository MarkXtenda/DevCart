import React from 'react';

type Props = {
  addToCart: (note: string) => void;
};

const Notes: React.FC<Props> = ({ addToCart }) => {
  return (
    <div>
      <h1>Programming Language Notes</h1>
      <ul>
        <li>
          <h2>JavaScript Notes</h2>
          <button onClick={() => addToCart('JavaScript Notes')}>Add to Cart</button>
        </li>
        <li>
          <h2>Typescript (Basics) Notes</h2>
          <button onClick={() => addToCart('Typescript Notes')}>Add to Cart</button>
        </li>
        <li>
          <h2>React Notes</h2>
          <button onClick={() => addToCart('React Notes')}>Add to Cart</button>
        </li>
        <li>
          <h2>SQL Notes</h2>
          <button onClick={() => addToCart('SQL Notes')}>Add to Cart</button>
        </li>
        <li>
          <h2>Ruby Notes</h2>
          <button onClick={() => addToCart('Ruby Notes')}>Add to Cart</button>
        </li>
        <li>
          <h2>Ruby on Rails Notes</h2>
          <button onClick={() => addToCart('Ruby on Rails Notes')}>Add to Cart</button>
        </li>
      </ul>
    </div>
  );
};

export default Notes;
