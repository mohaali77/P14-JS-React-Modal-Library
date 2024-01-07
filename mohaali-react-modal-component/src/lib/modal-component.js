import React from 'react';
import './modal-component.css';
import closeImg from './images/modal-close.png'

const ModalComponent = ({ isOpen, modalContent, overlayStyle, modalStyle, contentStyle, imgStyle, onClose }) => {

  if (!isOpen) {
    return null;
  }

  return <>
    <div style={overlayStyle} className="modal-overlay">
      <div style={modalStyle} className="modal">
        <p style={contentStyle}>{modalContent}</p>
        <img style={imgStyle}
          src={closeImg} alt='close button of modal'
          className="close-button"
          onClick={onClose}
        />
      </div>
    </div>
  </>;
};

export default ModalComponent;
