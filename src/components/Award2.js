// import {useState} from 'react';

function Award2({handleStep,textButton, image}) {

    return (
      <>
      <div className="container">
        <h1>Félicitation !
tu a bien trouvé le bon numéro.

Retiens bien le numéros 2</h1>
        <button className="button" onClick={handleStep} >{textButton}</button>
      </div>
      {image}
      </>
    );
  }
  
  export default Award2;
  