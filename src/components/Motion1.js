import React from 'react';
import { useState } from 'react';
import Lottie from 'react-lottie';
import v1 from "../V1.json";
import Popup from 'reactjs-popup';
import AudioSimple from './Audio';

//test de push


function Motion1({ handleStep, textButton, image, image2}) {

  const [, setShow] = useState(true)
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  setTimeout(() => {
    setShow(false)
  }, 5000)

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
        <AudioSimple path="./mp3/son-1.mp3"></AudioSimple>
        <Lottie
          options={defaultOptions}
          onComplete={() => setShow(false)}
        />

        <div className="actions">
          {
              <button className='button-motion-1' onClick={handleStep} >{textButton}</button>
          }

          <div>
            <button type="button" className="button" onClick={() => setOpen(o => !o)}>
              Transcription écrite
            </button>
            <Popup className='popup' open={open} closeOnDocumentClick onClose={closeModal}>
              <div className="modal">
                <p className="close" onClick={closeModal}>
                  &times;
                </p>
                <p className='popup-text'> 
                “Mon ami, il faut que je te dise un secret. Au musée, peu de personnes en ont hérité. Mais je t’ai choisi. Je vais donc te le confier !<br /> Ainsi, il pourra survivre au temps. Je te demande qu’une chose, de rester assez discret pour ne pas le compromettre. <br /> <br />
                C’est un trésor transmis de génération en génération. Pour l’ouvrir, il te faudra la combinaison du cadenas qui le verrouille.<br /> Tu l’obtiendras avec l’aide de certaines figures emblématiques de salle “Les années 1910 à 1940 : du Cubisme au retour à l’ordre”.
                </p>
              </div>
            </Popup>
          </div>
        </div>
      </div>
      {image}
      {image2}
    </>
  );
}

export default Motion1;
