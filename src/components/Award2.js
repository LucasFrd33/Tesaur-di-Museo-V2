// import {useState} from 'react';

function Award2({handleStep,textButton, image}) {

    return (
      <>
      <div className="container-award">
        <h1 className="h1-award2">Félicitation !
tu a bien trouvé le bon numéro.

Retiens bien le numéros <span>2</span> </h1>
        <button className="button" onClick={handleStep} >{textButton}</button>
      </div>
      {image}
      </>
    );
  }
  
  export default Award2;
  