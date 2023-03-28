import React from 'react';
import {useLocation} from 'react-router-dom';
import { Link } from 'react-router-dom';

type Props = {
  name: string,
  cart : string[],
  handleCart : (notes: string) => void;
};

const Note: React.FC<Props> = ({name, cart, handleCart }) => {
  return (
  <div>
    <Link to={`${name.toLocaleLowerCase().replaceAll(" ", "")}`}><h2>{name} Notes</h2></Link>
    <button onClick={() => handleCart(`${name} Notes`)}>{cart.some((item)=> item===`${name} Notes`) ? "Remove from Cart" : "Add to Cart"}</button>
  </div>
  );
};

export default Note;