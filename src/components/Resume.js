// import { useState } from "react";

function Resume({handleStep,textButton, title, text, image}) {
    return (
      <>
      <div className="container-resume">
        <div>
        {title}
        {text}
        </div>
         <button onClick={handleStep} >{textButton}</button>
      </div>
      {image}
    </>
    );
  }
  
  export default Resume;
  