import React from 'react';

function Modal(props) {
  return (
    <div className='modal'>
      <h4>Modal</h4>
      <button className='btn btn--alt'>1</button>
      <button className='btn' onClick={props.onClose}>close</button>
    </div>
  );
};

export default Modal;