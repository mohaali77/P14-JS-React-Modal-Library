# Bibliothèque modale

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

return (
<div>

  <form>
   {/* votre logique de formulaire*/ }

   {/* Au clic sur le bouton, on modifie le state modalOpen comme true */ }
    <button onClick={() => {setModalOpen(true)}} type="submit">Soumettre</button>
  </form>

   {/*Appelez votre composant, et définissez lui ces props qui permettront d'afficher la modale, et de la fermer*/}
  <ModalComponent isOpen={modalOpen} onClose={() => setModalOpen(false)}/>

   {/* Pour modifier le style de la modale, procédez ainsi : */}

    <ModalComponent isOpen={modalOpen} onClose={() => setModalOpen(false)}
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