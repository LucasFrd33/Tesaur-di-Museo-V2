import React from 'react';
import {useState} from 'react';
import Lottie from 'react-lottie';
import v1 from "../V1-tbl3.json";
import AudioSimple from './Audio';


function Motion4({handleStep,textButton, image}) {

  const [showTranscription, setShowTranscription] = useState(true);
  const [show, setShow] = useState(true)
    
  setTimeout(() => {
    setShow(false)
  }, 5000)

  function handleShowTranscription(){
    const show = showTranscription
    setShowTranscription(!show)
  }

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: v1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    },
  };
    return (
      <>
      <div className="container-motion">
      <AudioSimple path="./mp3/son-4.mp3"></AudioSimple>

        <h1 className='h1-motion'>Commençons le 3ème jeu !</h1>
        <Lottie 
	        options={defaultOptions}
          onComplete={() => setShow(false)}
        />
      <div className="actions">

      {
        show ? "" : 
        <button className='button-motion' onClick={handleStep} >{textButton}</button>
      }
        
        <button onClick={handleShowTranscription}>Transcription écrite</button> 
{showTranscription ? "" :
        <p> Te voilà, mon cher camarade, je t’attendais ! <br/> Place-toi à mes côtés et contemple ce magnifique tableau <br/>
        de Willem Van Hasselt. Tu le trouves beau, n’est ce pas ? <br/>
        Viens, mets-toi juste devant et tu pourras l’admirer de plus près.<br/>
        
        L’as tu bien regardé ? <br/>Sauras-tu voir les différences <br/>
        avec sa reproduction sur ton écran ?<br/>
        
        Si tu ne te trompes pas, <br/>
        le nombre des différences te donnera le dernier chiffre du cadenas.<br/>
         Ainsi, tu pourras ouvrir le fameux trésor !
      </p>
}</div>
      </div>
      {image}
      </>
    );
  }
  
  export default Motion4;
  