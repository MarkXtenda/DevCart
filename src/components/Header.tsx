import React from 'react';
import { Link } from "react-router-dom";

type Props = {
  cartLength: number,
  loggedIn: boolean;
  handleLogout: () => void;
};

const Header: React.FC<Props> = ({ cartLength, loggedIn, handleLogout }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/notes">Notes</Link>
          </li>
          {loggedIn ? (
            <>
              <li>
                <Link to="/cart">Cart ({cartLength})</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
