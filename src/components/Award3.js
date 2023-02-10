// import {useState} from 'react';

function Award3({handleStep,textButton}) {

    return (
      <div className="container-award">
        <h1>Félicitation !
tu a bien trouvé le bon numéro.

Retiens bien le numéro 3 .</h1>
        <button className="button" onClick={handleStep} >{textButton}</button>
      </div>
    );
  }
  
  export default Award3;
  