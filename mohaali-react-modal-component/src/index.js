/**
 * Composant principal de l'application React.
 * @module App
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import ModalComponent from './lib/modal-component';

/**
 * Composant principal de l'application.
 * @returns {JSX.Element} Composant principal de l'application.
 */
const App = () => {
  /**
   * État pour contrôler l'ouverture et la fermeture de la modal.
   * @type {[boolean, function]} Le tableau contient l'état de la modal et la fonction pour changer son état.
   */
  const [modalOpen, setModalOpen] = useState(false);

  /**
   * Fonction pour fermer la modal et, si souhaité, rediriger vers une page choisie.
   */
  const closeModal = () => {
    setModalOpen(false)
    window.location.href = '/autrePage'
  };

  return (
    <div>
      <h1>Mon application React</h1>
      <button
        onClick={() => { setModalOpen(true); }}

      >Ouvrir la modal</button>
      <ModalComponent
        isOpen={modalOpen}
        onClose={closeModal} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />);
