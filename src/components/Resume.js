// import { useState } from "react";

function Resume({handleStep,textButton, title, text, Image}) {
    return (
    <>
      <div className="container">
        {title}
        {text}
         <button onClick={handleStep} >{textButton}</button>
      </div>
      {Image}
    </>
    );
  }
  
  export default Resume;
  