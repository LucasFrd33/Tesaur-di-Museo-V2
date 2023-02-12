import React from 'react';
import { useState } from 'react';
import Lottie from 'react-lottie';
import v1 from "../V1-tbl3.json";
import Popup from 'reactjs-popup';
import AudioSimple from './Audio';


function Motion4({ handleStep, textButton, image, image2 }) {

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
        <AudioSimple path="./mp3/son-4.mp3"></AudioSimple>

        <h1 className='h1-motion'>Commençons le 3ème jeu !</h1>
        <Lottie
          options={defaultOptions}
          onComplete={() => setShow(false)}
        />
        <div className="actions">

          {
            <button className='button-motion' onClick={handleStep} >{textButton}</button>
          }
          <button type="button" className="button" onClick={() => setOpen(o => !o)}>
            Transcription écrite
          </button>
          <Popup className='popup' open={open} closeOnDocumentClick onClose={closeModal}>
            <div className="modal">
              <p className="close" onClick={closeModal}>
                &times;
              </p>
              <p className='popup-text'>
                Te voilà, mon cher camarade, je t’attendais ! <br /> Place-toi à mes côtés et contemple ce magnifique tableau <br />
                de Willem Van Hasselt. Tu le trouves beau, n’est ce pas ? <br />
                Viens, mets-toi juste devant et tu pourras l’admirer de plus près.<br /><br />

                L’as tu bien regardé ? <br />Sauras-tu voir les différences <br />
                avec sa reproduction sur ton écran ?<br /><br />

                Si tu ne te trompes pas, <br />
                le nombre des différences te donnera le dernier chiffre du cadenas.<br />
                Ainsi, tu pourras ouvrir le fameux trésor !
              </p>
            </div>
          </Popup>
        </div>
      </div>
      {image}
      {image2}
    </>
  );
}

export default Motion4;
