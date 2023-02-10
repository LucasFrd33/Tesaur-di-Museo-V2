// import { useState } from "react";

function Resume({handleStep,textButton, title, text}) {
    return (
      <div className="container-resume">
        <div>
        {title}
        {text}
        </div>
         <button onClick={handleStep} >{textButton}</button>
      </div>
    );
  }
  
  export default Resume;
  