import React from 'react';
import { useState } from 'react';
import Lottie from 'react-lottie';
import v1 from "../V1-tbl2.json";
import Popup from 'reactjs-popup';
import AudioSimple from './Audio';


function Motion3({ handleStep, textButton, image, image2 }) {

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
        <AudioSimple path="./mp3/son-3.mp3"></AudioSimple>

        <h1 className='h1-motion'>Commençons le 2ème jeu !</h1>
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
                Je suis sorti de mon tableau, tu sais celui d'Albert Marquet, "Fête aux Sables d'Olonne" car je n’étais qu’un petit détail. <br />
                C’est pourquoi, je suis venu à ta rencontre pour t’aider dans ta quête. <br />
                Ouvre tes yeux et regarde autour de toi. <br /> <br />
                Tu pourras me reconnaître avec mon chapeau melon. <br />
                Approche toi de moi et révèle moi le nom du tableau d’où je viens. <br />
                Ainsi, je pourrais te transmettre le second chiffre du cadenas.
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

export default Motion3;
