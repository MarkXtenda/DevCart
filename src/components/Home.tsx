import React from 'react';
import Note from './Note';

enum Categories {
  frontEnd = "Front-End",
  backEnd = "Back-End"
}

interface ProgramingLanguage {
  name : string,
  category? : string,
  description? : string, 
}

type Props = {
  notesArray : Array<ProgramingLanguage>,
  cart : string[],
  removeFromCart: (note: string) => void,
  addToCart : (note: string) => void;
}

const Home: React.FC<Props> = ({notesArray, cart, removeFromCart, addToCart}) => {
  return (
    <div>
      <h1>Welcome to the e-commerce website for programming language notes</h1>
      <p>
        Here you can browse notes for different programming languages and add
        them to your shopping cart.
      </p>
      <h2>{Categories.frontEnd}</h2>
      {notesArray.filter((note)=>note.category === Categories.frontEnd).map((note, index) => (
          <Note key={index} name={note.name} cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} />))}
      <h2>{Categories.backEnd}</h2>
      {notesArray.filter((note)=>note.category === Categories.backEnd).map((note, index) => (
          <Note key={index} name={note.name}  cart={cart} removeFromCart={removeFromCart}  addToCart={addToCart} />))}
    </div>
  );
};

export default Home;
