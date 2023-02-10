import React from 'react';
import { useState } from 'react';
import Lottie from 'react-lottie';
import v1 from "../V1.json";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function Motion1({ handleStep, textButton, image }) {

  const [show, setShow] = useState(true)

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
      <Lottie
        options={defaultOptions}
        onComplete={() => setShow(false)}
      />
      
      <div className="actions">
        {
          show ? "" :
            <button className='button-motion-1' onClick={handleStep} >{textButton}</button>
        }
        <Popup trigger={<button>Transcription écrite</button>}>
          <div>
            <p> (François Mauriac)	- Viens me voir ! Je suis François Mauriac, le buste avec un style <br />
              cubique. Veux-tu que je te raconte mon histoire ?<br />

              (Albert Marquet )	- Arrête d'écouter cet écrivain, il va encore te parler sa remise de prix<br />
              concernant ces livres. Mais vient plutôt admirer mes tableaux notamment mon autoportrait ! Tu le trouve beau, n’est ce pas !<br />

              (André Lhote)	- Viens plutôt contempler mon autoportrait ! Il y a tellement de nuances !<br />
              Alors chez Albert Marquet, c’est assez terne, maussade.<br />

              (François Mauriac)	- Arrêtez vous mes amis ! Vos deux oeuvres sont très belles à<br />
              leur manière ! Je crois que notre chèr visiteur, n’est pas venu par hasard ! Alors hâtez vous de lui donner les instructions concernant le 1er chiffre du cadenas !<br />

              (André Lhote)	- Je comprends mieux ! Mais pourquoi moi ? Albert Marquet peut<br />
              également le faire !

              (Albert Marquet )	- Certainement monsieur ! Je suis bien plus en mesure de le faire que<br />
              notre spécialiste en cubisme André Lhote !<br />
              Vas nous voir, que ce soit André Lhote, François Mauriac et moi même. Tu obtiendras de chacun de nous, un chiffre, qu’il faudra additionner. Cela te donnera le premier élément du cadenas !
            </p>
          </div>
        </Popup>

      </div>
    </div>
    {image}
    </>
  );
}

export default Motion1;
