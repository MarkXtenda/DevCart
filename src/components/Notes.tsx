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
  handleCart : (notes: string) => void;
};

const Notes: React.FC<Props> = ({notesArray, cart, handleCart }) => {

  return (

    <div>
      <h1>Programming Language Notes</h1>
      {notesArray.map((note, index)=> 
          <Note key={index} name={note.name} cart={cart} handleCart={handleCart} />
      )}
    </div>
  );
};

export default Notes;
