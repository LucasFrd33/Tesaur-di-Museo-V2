// import {useState} from 'react';

function Intro({text, textButton, image, handleStep, title}) {

  return (
    <div className="container">
      {title}
      <img className="img-bg-1" src="./img/image1.webp" alt="tt" />
      <div className="actions">
        <button className="button" onClick={handleStep} >{textButton}</button>
      </div>
    </div>
  );
}

export default Intro;
