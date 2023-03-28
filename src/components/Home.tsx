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
  handleCart : (notes: string) => void;
}

const Home: React.FC<Props> = ({notesArray, cart, handleCart}) => {
  return (
    <div>
      <h1>Welcome to the e-commerce website for programming language notes</h1>
      <p>
        Here you can browse notes for different programming languages and add
        them to your shopping cart.
      </p>
      <h2>{Categories.frontEnd}</h2>
      <section className='notes-section'>
        {notesArray.filter((note)=>note.category === Categories.frontEnd)
        .map((note, index) => (<Note key={index} name={note.name} cart={cart} handleCart={handleCart} />))}
      </section>
      <h2>{Categories.backEnd}</h2>
      <section className='notes-section'>
        {notesArray.filter((note)=>note.category === Categories.backEnd)
        .map((note, index) => (<Note key={index} name={note.name}  cart={cart} handleCart={handleCart} />))}
      </section>
    </div>
  );
};

export default Home;
