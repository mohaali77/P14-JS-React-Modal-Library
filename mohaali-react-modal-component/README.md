# Bibliothèque modale

## Pré-requis

Node JS : https://nodejs.org/en

## Installation du composant

1. Placez-vous dans votre projet et installez la bibliothèque :

cd mon-projet
npm (ou yarn) install mohaali-react-modal-component

## Exemple d'utilisation du composant : 

Si vous souhaitez, par exemple, afficher la modale lors de la soumission d'un formulaire. Procédez ainsi :

```jsx

//mon-projet/components/formulaire.jsx

// Importez le composant
import ModalComponent from 'mohaali-react-modal-component'

function MonComposant() {

// Définissez un state modalOpen, qui sera initialisé comme false
const [modalOpen, setModalOpen] = useState(false);

return (
<div>

  <form>
   {/* votre logique de formulaire*/ }

   {/* Au clic sur le bouton, on modifie le state modalOpen comme true */ }
    <button onClick={() => {setModalOpen(true)}} type="submit">Soumettre</button>
  </form>

   {/*Appelez votre composant, et définissez lui ces props
   qui permettront d'afficher la modale, et de la fermer*/}
  <ModalComponent isOpen={modalOpen} onClose={() => setModalOpen(false)}/>

   {/* Pour modifier le style de la modale, procédez ainsi : */}

</div>
);
}

export default MonComposant;
```