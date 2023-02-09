// import { useState } from "react";

function Transition({handleStep,textButton, title, text}) {
    return (
      <div className="container">
        {title}
        {text}
         <button onClick={handleStep} >{textButton}</button>
      </div>
    );
  }
  
  export default Transition;
  