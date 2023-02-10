// import {useState} from 'react';

function Award({handleStep,textButton, image}) {

    return (
      <>
      <div className="container-award">
        <h1 className="h1-anward1">Félicitation !
tu a bien trouvé le bon numéro.
Retiens bien le numéros 9 </h1>
        <button className="button" onClick={handleStep} >{textButton}</button>
      </div>
      {image}
      </>
    );
  }
  
  export default Award;
  