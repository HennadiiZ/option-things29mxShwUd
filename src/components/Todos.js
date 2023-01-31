import React, { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todos(props) {
  // let message = 'Hello';
  const [showModal, setShowModal] = useState(false);

  const deleteHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
    console.log(123);
  };

  return (
    <React.Fragment>
    {!showModal &&  (<div style={{background: "gray", width: "30%", textAlign: "center", padding: "15px", marginBottom: "10px"}}>
      <h2>{props.text}</h2>
      <button 
        onClick={deleteHandler}
      >Press</button>
      <button 
        onClick={() => props.chooseMessage(123)}
      >Delete</button>
    </div>)}
    {showModal ? <Modal onClose={closeModalHandler}/> : null}
    {showModal ? <Backdrop onClose={closeModalHandler}/> : null}
    </React.Fragment>
  );
}

export default Todos;