// import { useState } from "react";

function Resume2({handleStep,textButton, title, text, image, image2}) {
    return (
      <>
      <div className="container">
       
        {title}
        {text}
         <button onClick={handleStep} >{textButton}</button>
      </div>
      {image}
      {image2}
      </>
    );
  }
  
  export default Resume2;
  