// import { useState } from "react";
//TEST 
// test 2

function Resume({handleStep,textButton, title, text, Image}) {
    return (
      <>
      <div className="container-resume">
        <div>
        {title}
        {text}
        </div>
         <button onClick={handleStep} >{textButton}</button>
      </div>
      {Image}
    </>
    );
  }
  
  export default Resume;
  