// import {useState} from 'react';

function Award({handleStep,textButton}) {

    return (
      <div className="container-award">
        <h1>Félicitation !
tu a bien trouvé le bon numéro.
Retiens bien le numéros 9 </h1>
        <button className="button" onClick={handleStep} >{textButton}</button>
      </div>
    );
  }
  
  export default Award;
  