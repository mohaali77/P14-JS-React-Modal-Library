import React from 'react';
import './modal-component.css';
import closeImg from './images/modal-close.png'

const ModalComponent = ({ isOpen, onClose, modalContent, overlayStyle, modalStyle, contentStyle, imgStyle }) => {
  if (!isOpen) {
    return null;
  }

  /*if(!linkToPage){

  }*/

  return <>
    <div style={overlayStyle} className="modal-overlay">
      <div style={modalStyle} className="modal">
        <p style={contentStyle}>{modalContent}</p>
        <img style={imgStyle} src={closeImg} alt='' className="close-button" onClick={onClose} />
      </div>
    </div>
  </>;
};

export default ModalComponent;
