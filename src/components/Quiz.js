function Quiz({text, textButton, handleStep, title, image}) {
  return (
    <>
    <div className="container-quiz">
      {title}
      <p>{text}</p>
      <button onClick={handleStep} >{textButton}</button>
    </div>
      {image}
    </>
  );
}

export default Quiz;
