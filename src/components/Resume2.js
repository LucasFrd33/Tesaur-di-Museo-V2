// import { useState } from "react";

function Resume2({handleStep,textButton, title, text, tableau, image2, image}) {
    return (
      <>
      <div className="container-resume">
        {title}
        {text}
        {tableau}
         <button onClick={handleStep} >{textButton}</button>
      </div>
      {image}
      {image2}
      </>
    );
  }
  
  export default Resume2;
  