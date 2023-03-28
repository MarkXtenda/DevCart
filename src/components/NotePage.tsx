import React from 'react';

type Props = {
  name?: string,
  description?: string,
  addToCart: (note: string) => void;
};

const NotePage: React.FC<Props> = ({name = "Default", description = "default description", addToCart }) => {

  return (
  <div>
    <h2>{name} Note</h2>
    <p>{description}</p>
    <button onClick={() => addToCart(`${name} Notes`)}>Add to Cart</button>
  </div>
  );
};

export default NotePage;