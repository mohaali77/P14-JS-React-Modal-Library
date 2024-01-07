# Bibliothèque modale | Français

## Pré-requis

Node JS : https://nodejs.org/en

## Installation du composant

1. Placez-vous dans votre projet :

#### `cd mon-projet`

2. Installez la bibliothèque :

#### `npm install mohaali-react-modal-component`

## Exemple d'utilisation du composant : 

Si vous souhaitez, par exemple, afficher la modale lors de la soumission d'un formulaire. Procédez ainsi :

```jsx

//mon-projet/components/formulaire.jsx

// Importez le composant
import ModalComponent from 'mohaali-react-modal-component'

function MonComposant() {

// Définissez un state modalOpen, qui sera initialisé comme false
const [modalOpen, setModalOpen] = useState(false);

// Créez la fonction qui permettra la fermeture de la modale
const closeModal = () => {
    setModalOpen(false)
    /*Si vous souhaitez ajouter une navigation lors de la fermeture de la modale
    vous pouvez effectuer un window.location ou tout autre méthode ici*/
    window.location.href = '/votre-page'
  };

return (
<div>

  <form>
   {/* votre logique de formulaire*/ }

   {/* Au clic sur le bouton, on modifie le state modalOpen comme true */ }
    <button onClick={() => {setModalOpen(true)}} type="submit">Soumettre</button>
  </form>

   {/*Appelez votre composant, et définissez lui ces props qui permettront d'afficher la modale, et de la fermer*/}
  <ModalComponent isOpen={modalOpen} onClose={closeModal}/>

   {/* Pour modifier le style de la modale, procédez ainsi : */}

    <ModalComponent isOpen={modalOpen} onClose={closeModal}
      /*Utilisez cette props pour ajouter le texte souhaité dans la modale.*/
      modalContent={'Votre formulaire a été envoyé avec succès !'} 
      /*Utilisez cette props pour modifier le style de l'overlay de la modale.*/
      overlayStyle={{backgroundColor: 'red'}}
      /*Utilisez cette props pour modifier le style de la modale.*/
      modalStyle={{width: '500px'}}
      /*Utilisez cette props pour modifier le style du texte dans la modale.*/
      contentStyle={{fontSize: '15px'}}
      /*Utilisez cette props pour modifier le style de l'image (qui sert de bouton de fermeture) de la modale.*/
      imgStyle={{height: '50px'}}
    />

</div>
);
}

export default MonComposant;
```

# Modal Library | English

## Prerequisites

Node JS: https://nodejs.org/en

## Installing the Component

1. Navigate to your project:

#### `cd my-project`

2. Install the library:

#### `npm install mohaali-react-modal-component`

## Example of how to use the component:

If you want for example, to show the modal after submitting a form, proceed as follows:

```jsx

//my-project/components/form.jsx

// Import the component
import ModalComponent from 'mohaali-react-modal-component'

function MyComponent() {

// Define a state modalOpen, which will be initialized as false
const [modalOpen, setModalOpen] = useState(false);

//Create the fucntion to close the modale
const closeModal = () => {
    setModalOpen(false)
    /* If you want to add navigation upon modal closure,
       you can use window.location or any other method here */
    window.location.href = '/your-page'
};

return (
<div>

  <form>
   {/* Your form logic */ }

   {/* On button click, update the modalOpen state to true */ }
    <button onClick={() => {setModalOpen(true)}} type="submit">Submit</button>
  </form>

   {/* Call your component and set its props to display and close the modal */}
  <ModalComponent isOpen={modalOpen} onClose={closeModal}/>

   {/* To modify the style of the modal, proceed as follows: */}

    <ModalComponent isOpen={modalOpen} onClose={closeModal}
      /* Use this prop to add the desired text inside the modal. */
      modalContent={'Your form has been successfully submitted!'} 
      /* Use this prop to modify the style of the modal overlay. */
      overlayStyle={{backgroundColor: 'red'}}
      /* Use this prop to modify the style of the modal. */
      modalStyle={{width: '500px'}}
      /* Use this prop to modify the style of the text inside the modal. */
      contentStyle={{fontSize: '15px'}}
      /* Use this prop to modify the style of the image (which serves as the close button) of the modal. */
      imgStyle={{height: '50px'}}
    />

</div>
);
}

export default MyComponent;
```