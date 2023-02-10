// import { useState } from "react";

function Resume2({handleStep,textButton, title, text, tableau}) {
    return (
      <div className="container">
        {title}
        {text}
        {tableau}
         <button onClick={handleStep} >{textButton}</button>
      </div>
    );
  }
  
  export default Resume2;
  