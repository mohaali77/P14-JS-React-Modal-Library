import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ModalComponent from './lib/modal-component';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  //const [linkToPage, setLinkToPage] = useState(false);

  return (
    <div>
      <h1>Mon application React</h1>
      <button
        onClick={() => {
          setModalOpen(true);
        }}

      >Ouvrir la modal</button>
      <ModalComponent
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      //modalContent={{}}
      //overlayStyle={{}}
      //modalStyle={{}}
      //contentStyle={{}}
      //imgStyle={{}}

      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));