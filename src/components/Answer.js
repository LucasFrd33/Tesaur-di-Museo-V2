import {useState} from 'react';

function Answer({handleStep,textButton, image}) {
  const [showButton, setShowButton] = useState(true);

  function handleChange(e){
    const t = e.target.value
    if(t === "9"){
      const show = showButton
      setShowButton(!show)
    }
  }
    return (
      <>
      <div className="container-answer">
        <h1 className='h1-answer1'>Quel est le numéro présent dans le titre de ce tableau ?</h1>
        <select name="fruit" onChange={handleChange}>
          <option value ="none">3</option>
          <option value ="none">5</option>
          <option value ="9">9</option>
          <option value ="none">1</option>
          <option value ="none">8</option>
          <option value ="none">7</option>
          <option value ="none">2</option>
        </select> 
        {
          showButton ? "" :  <button onClick={handleStep} >{textButton}</button>
        }
      </div>
      {image}
      </>
    );
  }
  
  export default Answer;
  