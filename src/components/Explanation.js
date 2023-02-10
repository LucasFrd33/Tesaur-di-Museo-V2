import {useState} from 'react';

function Explanation({text, textButton, image, handleStep, transcriptionText, title, transcription}) {
  const Transcription = [
    {
      text: 
      <p> (François Mauriac)	- Viens me voir ! Je suis François Mauriac, le buste avec un style <br/>
      cubique. Veux-tu que je te raconte mon histoire ?<br/>
      
      (Albert Marquet )	- Arrête d'écouter cet écrivain, il va encore te parler sa remise de prix<br/>
      concernant ces livres. Mais vient plutôt admirer mes tableaux notamment mon autoportrait ! Tu le trouve beau, n’est ce pas !<br/>
      
      (André Lhote)	- Viens plutôt contempler mon autoportrait ! Il y a tellement de nuances !<br/>
      Alors chez Albert Marquet, c’est assez terne, maussade.<br/>
      
      (François Mauriac)	- Arrêtez vous mes amis ! Vos deux oeuvres sont très belles à<br/>
      leur manière ! Je crois que notre chèr visiteur, n’est pas venu par hasard ! Alors hâtez vous de lui donner les instructions concernant le 1er chiffre du cadenas !<br/>
      
      (André Lhote)	- Je comprends mieux ! Mais pourquoi moi ? Albert Marquet peut<br/>
      également le faire !
      
      (Albert Marquet )	- Certainement monsieur ! Je suis bien plus en mesure de le faire que<br/>
      notre spécialiste en cubisme André Lhote !<br/>
      Vas nous voir, que ce soit André Lhote, François Mauriac et moi même. Tu obtiendras de chacun de nous, un chiffre, qu’il faudra additionner. Cela te donnera le premier élément du cadenas !
      </p>
    },
    {
      text: "Une autre transcription"
    },
  ]

  const [showTranscription, setShowTranscription] = useState(false);
  
  function handleShowTranscription(){
    let show = showTranscription
    setShowTranscription(!show)
  }

  return (
    <div className="container-explanation">
      {title}
      <p>{text}</p>
      <img src={image} alt="motion"></img>
      <button onClick={handleStep} >{textButton}</button>
      {transcription ? <button onClick={handleShowTranscription}>Transcription écrite</button> : ""}
      {/* <button>Résumer</button> */}
      {showTranscription ? <p>{Transcription[transcriptionText].text}</p> : "" }
    </div>
  );
}

export default Explanation;
