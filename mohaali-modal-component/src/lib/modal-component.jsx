// lib/modal-component.js
import React from 'react';
import './modal-component.css';
import closeImg from './images/modal-close.png'

const ModalComponent = ({ isOpen, onClose, modalContent, overlayStyle, modalStyle }) => {
  if (!isOpen) {
    return null;
  }

  return <>
    <div style={overlayStyle} className="modal-overlay">
      <div style={modalStyle} className="modal">
        <p> {modalContent}Employee Created !</p>
        <img src={closeImg} alt='' className="close-button" onClick={onClose} />
      </div>
    </div>
  </>;
};

export default ModalComponent;
