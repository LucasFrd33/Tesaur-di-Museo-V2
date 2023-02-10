import React from 'react';
import {useState} from 'react';
import Lottie from 'react-lottie';
import v1 from "../V1.json";

function Motion2({handleStep,textButton}) {

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
      <div className="container-motion">
        <h1 className='h1-motion' >Commençons par le 1er jeu !</h1>
        <Lottie 
	        options={defaultOptions}
          height={600}
          width={390}
          onComplete={() => setShow(false)}
         
        />
      <div className="actions">
        {
        show ? "" : 
          <button className='button-motion' onClick={handleStep} >{textButton}</button>
        }
        <button onClick={handleShowTranscription}>Transcription écrite</button> 
      </div>  

{showTranscription ? "" :
        <p className='text-motion' > <strong>Bonjour chère camarade !</strong> <br/>

         Je vais t’aider à trouver la combinaison du cadenas verrouillant le fameux coffre. <br/>

        Rends toi devant mes œuvres ! <br/> Sauras-tu retrouver un de mes tableaux comportant un chiffre. 
        <br/>Celui-ci te donnera le premier chiffre du cadenas. <br/>Et n’hésite pas à prendre un peu de temps pour le contempler !
      </p>
}
      </div>
    );
  }
  
  export default Motion2;
  