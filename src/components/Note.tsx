import React from 'react';
import {useLocation} from 'react-router-dom';
import { Link } from 'react-router-dom';

type Props = {
  name: string,
  cart : string[],
  removeFromCart: (note: string) => void,
  addToCart: (note: string) => void;
};

const Note: React.FC<Props> = ({name, cart, removeFromCart, addToCart }) => {
  console.log(cart)
  return (
  <div>
    <Link to={`${name.toLocaleLowerCase().replaceAll(" ", "")}`}><h2>{name} Notes</h2></Link>
    <button onClick={() => addToCart(`${name} Notes`)}>Add to Cart</button>
  </div>
  );
};

export default Note;