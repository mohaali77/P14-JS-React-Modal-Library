/**
 * Composant de modal.
 * @module ModalComponent
 */


import React from 'react';
import './modal-component.css';
import closeImg from './images/modal-close.png'


/**
 * Composant de modal réutilisable.
 * @param {object} props - Les propriétés du composant.
 * @param {boolean} props.isOpen - Indique si la modal est ouverte ou fermée.
 * @param {string} props.modalContent - Le contenu de la modal.
 * @param {object} props.overlayStyle - Style de l'overlay de la modal.
 * @param {object} props.modalStyle - Style de la modal elle-même.
 * @param {object} props.contentStyle - Style du contenu de la modal.
 * @param {object} props.imgStyle - Style de l'image du bouton de fermeture.
 * @param {function} props.onClose - Fonction de rappel appelée lors de la fermeture de la modal.
 * @returns {JSX.Element} Composant de modal.
 */
const ModalComponent = ({ isOpen, modalContent, overlayStyle, modalStyle, contentStyle, imgStyle, onClose }) => {


  /**
   * Condition qui va afficher la modal si elle est ouverte, sinon elle ne retournera null.
   * @returns {JSX.Element|null} 
   */
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
