// import {useState} from 'react';

function Intro({text, textButton, image, handleStep, title}) {

  return (
  <>
    <div className="container-intro">
      {title}
      <div className="actions">
        <button className="button-intro" onClick={handleStep} >{textButton}</button>
      </div>
    </div>
      {image}
</>
  );
}

export default Intro;
