// import {useState} from 'react';

function Award3({handleStep,textButton}) {

    return (
      <div className="container">
        <h1>Félicitation !
tu a bien trouvé le bon numéro.

Retiens bien le numéro 8 .</h1>
        <button className="button" onClick={handleStep} >{textButton}</button>
      </div>
    );
  }
  
  export default Award3;
  