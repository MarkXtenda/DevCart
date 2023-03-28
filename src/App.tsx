import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Notes from './components/Notes';
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [cart, setCart] = useState<any[]>([]);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const addToCart = (note: string) => {
    // Possibly can fit alert that user cant add more than one note to the cart
    (cart.some((item) => item === note)) ? cart : setCart([...cart, note])
  };

  const removeFromCart = (note: string) => {
    setCart(cart.filter((item) => item !== note));
  };

  //   return (
  //     <div>
  //       <Header loggedIn={loggedIn} handleLogout={handleLogout}/>
  //       <nav>
  //         <ul>
  //           <li>
  //             <a href="#">Home</a>
  //           </li>
  //           <li>
  //             <a href="#">Notes</a>
  //           </li>
  //           {loggedIn ? (
  //             <li>
  //               <button onClick={handleLogout}>Logout</button>
  //             </li>
  //           ) : (
  //             <li>
  //               <a href="#">Login</a>
  //             </li>
  //           )}
  //           <li>
  //             <a href="#">Cart ({cart.length})</a>
  //           </li>
  //         </ul>
  //       </nav>
  //       {loggedIn ? (
  //         <Notes addToCart={addToCart} />
  //       ) : (
  //         <Login handleLogin={handleLogin} />
  //       )}
  //       <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
  //       <Footer />
  //     </div>
  //   );
  // };
  return (
    <Router>
      <Header cartLength={cart.length} loggedIn={loggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/login" element={<Login handleLogin={handleLogin} />}></Route>
        <Route path="/notes" element={<Notes addToCart={addToCart} />}></Route>
        <Route path="/cart" element={<ShoppingCart cart={cart} removeFromCart={removeFromCart} />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
