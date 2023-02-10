// import { useState } from "react";

function Transition({handleStep,textButton, title, text, image}) {
    return (
      <>
      <div className="container-transition">
        {title}
        {text}
         <button onClick={handleStep} >{textButton}</button>
      </div>
      {image}
      </>
    );
  }
  
  export default Transition;
  