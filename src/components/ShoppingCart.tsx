import React from 'react';

type Props = {
  cart: string[];
  removeFromCart: (note: string) => void;
};

const ShoppingCart: React.FC<Props> = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h1>Notes Cart</h1>
      {cart.length === 0 ? (
        <p>Your Note cart is empty</p>
      ) : (
        <ul>
          {cart.map((note) => (
            <li key={note}>
              {note}{' '}
              <button onClick={() => removeFromCart(note)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <button onClick={() => alert('Your notes have been downloaded!')}>
          Download Notes
        </button>
      )}
    </div>
  );
};

export default ShoppingCart;