import React from 'react';
import { useState } from 'react';
import Lottie from 'react-lottie';
import v1 from "../V1-tbl1.json";
import Popup from 'reactjs-popup';
import AudioSimple from './Audio';

function Motion2({ handleStep, textButton, image, image2 }) {

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
        <AudioSimple path="./mp3/son-2.mp3"></AudioSimple>
        <h1 className='h1-motion' >Commençons par le 1er jeu !</h1>
        <div className="actions">
          {
            <button className='button-motion' onClick={handleStep} >{textButton}</button>
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
                  <strong>Bonjour chère camarade !</strong> <br /><br />

                  Je vais t’aider à trouver la combinaison du cadenas verrouillant le fameux coffre. <br />

                  Rends toi devant mes œuvres ! <br /> Sauras-tu retrouver un de mes tableaux comportant un chiffre.<br /> <br />
                  <br />Celui-ci te donnera le premier chiffre du cadenas. <br />Et n’hésite pas à prendre un peu de temps pour le contempler !
                </p>
              </div>
            </Popup>
          </div>


        </div>
      </div >
      <Lottie
        options={defaultOptions}
        onComplete={() => setShow(false)}

      />
      {image}
      {image2}
    </>
  );
}

export default Motion2;
