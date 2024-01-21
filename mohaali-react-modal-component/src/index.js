import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import ModalComponent from './lib/modal-component';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

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
