// lib/modal-component.js
import React from 'react';
import './modal-component.css';

const ModalComponent = ({ isOpen, onClose, modalContent }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        {modalContent}
      </div>
    </div>
  );
};

export default ModalComponent;
