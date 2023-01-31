import './App.css';
import React, { useState } from 'react';
import Todos from './components/Todos';
// import Modal from './components/Modal';
// import Backdrop from './components/Backdrop';

function App() {
  
  const openModalHandler = () => {};

  const chooseMessage = (text) => {
    console.log(text);
  };

  return (
    <React.Fragment>
      <Todos text="eat borsh" chooseMessage={chooseMessage}/>
      <Todos text="eat potato" chooseMessage={chooseMessage}/>
      <Todos text="eat me" chooseMessage={chooseMessage}/>
      <button onClick={openModalHandler}>show</button>
    </React.Fragment>
  );
}

export default App;
