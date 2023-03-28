import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Notes from './components/Notes';
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';
import './App.css';
import NotePage from './components/NotePage';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [cart, setCart] = useState<string[]>([]);

  interface ProgramingLanguage {
    name : string,
    category? : string,
    description? : string, 
  }
  
  const notesArray: Array<ProgramingLanguage> = [
    {name: 'JavaScript', category: "Front-End", description: "These JavaScript notes cover the fundamentals of Javascript. You'll learn about variables, scope, and basic type checking. The notes also cover operators and truthiness, as well as statements like the ternary expression. You'll explore functions, objects, and the DOM, with sections on selecting and modifying HTML elements, adding and removing elements, and working with events. Finally, the notes delve into asynchronous JavaScript, including using fetch() to communicate with servers, and how to explicitly override and lock context for functions."}, 
    {name: 'Typescript', category: "Front-End", description: "This Typescript Notes covers the basics of TypeScript, starting with its differences from JavaScript, the different Types and Type Inference. It covers Primitive Types, any, Supports Type Annotations, Functions, Return Types, and Complex Types including Arrays, Tuples, and Enums. The notes also discuss Object Type, Type Alias, Union Type, Type Guard, and Advanced Object Types such as Interface, Composed Types, and Index Signature."}, 
    {name: 'React',category: "Front-End", description: "This React Notes covers everything from the basics of modular code and importing/exporting to JSX, props, event handling, state, data fetching, and more. With clear explanations and code examples, you'll learn how to work with components, lists, forms, and information flow between components. You'll also discover how to use hooks like useState and useEffect to manage state and perform side effects, as well as how to create a React app from scratch using tools like Babel and Create React App."}, 
    {name: 'SQL', category: "Back-End", description: "SQL Notes provides a comprehensive introduction to SQL, covering various topics such as Database Basics, SQLite Data Types, SQL Table Manipulation, SQL Queries, Aggregate Functions, Table Relations, SQL Joins, and Object-Relational Mapping. You will learn how to create tables, alter columns, and delete data, as well as how to use SQL to select, update, and delete data. The notes also cover important concepts like database structure, data types, and the use of foreign keys to relate tables. Additionally, you will explore various types of joins and learn how to use ORMs to map database records to Ruby objects."}, 
    {name: 'Ruby', category: "Back-End", description: "Ruby Notes covers all the fundamental concepts of Ruby programming language. The guide starts with an introduction to variables, string interpolation, defining a method, topics of truthiness and booleans. The guide then moves onto conditionals, looping, and working with arrays. It covers the topics of abstraction, iteration, converting types, enumerables, sorting arrays, and hashes. Lastly, it covers the fundamental concepts of Object-Oriented Programming in Ruby, including classes, instances, and custom object methods."}, 
    {name: 'Ruby on Rails', category: "Back-End", description: "Ruby on Rails Notes provides a comprehensive overview of Ruby on Rails, a popular web development framework. The content covers various topics, including the basics of Rails, creating a Rails app, and the Rails file structure overview. It also delves into the concept of MVC, routing, and RESTful conventions in Rails. Additionally, this resource discusses dynamic routes, custom rendering, and basic error messaging. Whether you're a beginner or an experienced developer, these notes will help you gain a better understanding of Ruby on Rails and its various features."}]
  
  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const addToCart = (note: string) => {
    setCart([...cart, note])
  };

  const removeFromCart = (note: string) => {
    setCart(cart.filter((item) => item !== note));
  };

  const handleCart = (note: string) => {
    if (cart.some((item) => item === note)) { removeFromCart(note) }
    else { addToCart(note); }
  }

  return (
    <Router>
      <Header cartLength={cart.length} loggedIn={loggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path='/' element={<Home notesArray={notesArray} cart={cart} handleCart={handleCart}/>}></Route>
        <Route path='/login' element={<Login handleLogin={handleLogin} />}></Route>
        <Route path='/notes' element={<Notes notesArray={notesArray} cart={cart} handleCart={handleCart} />}></Route>
        <Route path='/cart' element={<ShoppingCart cart={cart} removeFromCart={removeFromCart} />}></Route>
        <Route path='/notes/:name' element={<NotePage addToCart={addToCart}/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
