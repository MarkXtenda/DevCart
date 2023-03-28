import React from 'react';
import Note from './Note';
import { Link } from 'react-router-dom';

interface ProgramingLanguage {
  name : string,
  category? : string,
  description? : string, 
}

type Props = {
  notesArray : Array<ProgramingLanguage>,
  cart : string[],
  removeFromCart: (note: string) => void,
  addToCart: (note: string) => void;
};

const Notes: React.FC<Props> = ({notesArray, cart, removeFromCart, addToCart }) => {

  return (

    <div>
      <h1>Programming Language Notes</h1>
      {notesArray.map((note, index)=> 
          <Note key={index} name={note.name} cart={cart} removeFromCart={removeFromCart}  addToCart={addToCart} />
      )}
    </div>
  );
};

export default Notes;
