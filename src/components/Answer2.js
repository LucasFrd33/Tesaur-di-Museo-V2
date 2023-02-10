import {useState} from 'react';

function Answer2({handleStep,textButton, image}) {
  const [showButton, setShowButton] = useState(true);

  function handleChange(e){
    const t = e.target.value
    if(t === "2"){
      const show = showButton
      setShowButton(!show)
    }
  }
    return (
      <>
      <div className="container-answer">
        <h1>Quel est le numéro que l’homme au chapeau melon t’as donné ?</h1>
        <select name="fruit" onChange={handleChange}>
          <option value ="none">3</option>
          <option value ="none">5</option>
          <option value ="none">1</option>
          <option value ="none">8</option>
          <option value ="none">7</option>
          <option value ="none">9</option>
          <option value ="2">2</option>
        </select> 
        {
          showButton ? "" :  <button onClick={handleStep} >{textButton}</button>
        }
      </div>
      {image}
      </>
    );
  }
  
  export default Answer2;
  