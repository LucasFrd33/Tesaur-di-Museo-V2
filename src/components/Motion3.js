import React from 'react';
import {useState} from 'react';
import Lottie from 'react-lottie';
import v1 from "../V1-tbl2.json";
import AudioSimple from './Audio';


function Motion3({handleStep,textButton, image}) {

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
      <AudioSimple path="./img/maxence_voix.mp3"></AudioSimple>

        <h1 className='h1-motion'>Commençons le 2ème jeu !</h1>
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
        <p> Je suis sorti de mon tableau, tu sais celui d'Albert Marquet, "Fête aux Sables d'Olonne" car je n’étais qu’un petit détail. <br/> 
        C’est pourquoi, je suis venu à ta rencontre pour t’aider dans ta quête. <br/> 
        Ouvre tes yeux et regarde autour de toi. <br/> 
        Tu pourras me reconnaître avec mon chapeau melon. <br/> 
        Approche toi de moi et révèle moi le nom du tableau d’où je viens. <br/> 
        Ainsi, je pourrais te transmettre le second chiffre du cadenas. 
      </p>
}
</div>
      </div>
      {image}
      </>
    );
  }
  
  export default Motion3;
  