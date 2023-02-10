import v1 from "../V1 homepage.json";
import Lottie from 'react-lottie';
// import {useState} from 'react';

function Intro({text, textButton, image, handleStep, title}) {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: v1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    },
  };
  return (
  <>
    <div className="container-intro">
      {title}
      <div className="actions">
        <button className="button-intro" onClick={handleStep} >{textButton}</button>
      </div>
    </div>
    <Lottie
        className="lottieIntro"
        options={defaultOptions}
      />
      {image}
</>
  );
}

export default Intro;
