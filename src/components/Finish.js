import {useState, useRef} from 'react';

function Finish({handleStep,textButton}) {
    const [showButton, setShowButton] = useState(true);

    const Chiffre1 = useRef()
    const Chiffre2 = useRef()
    const Chiffre3 = useRef()

  
    function handleChange(e){
      if(Chiffre1.current.value === "9" && Chiffre2.current.value === "2" && Chiffre3.current.value === "3"){
        const show = showButton
        console.log("COUCOUYU")
        setShowButton(!show)
      }
    }
    
    return (
      <div className="container-finish">
        <h1>Bravo ! Il ne te reste plus qu’à ouvrir le fameux trésor !</h1>
      <div className='code'>
         <select ref={Chiffre1} name="Chiffre1" onChange={handleChange}>
          <option value ="none">1</option>
          <option value ="none">2</option>
          <option value ="none">3</option>
          <option value ="none">4</option>
          <option value ="none">5</option>
          <option value ="none">6</option>
          <option value ="none">7</option>
          <option value ="none">8</option>
          <option value ="9">9</option>
        </select> 
        <select ref={Chiffre2} name="Chiffre2" onChange={handleChange}>
          <option value ="none">1</option>
          <option value ="2">2</option>
          <option value ="none">3</option>
          <option value ="none">4</option>
          <option value ="none">5</option>
          <option value ="none">6</option>
          <option value ="none">7</option>
          <option value ="none">8</option>
          <option value ="none">9</option>
        </select> 
        <select ref={Chiffre3} name="Chiffre3" onChange={handleChange}>
          <option value ="none">1</option>
          <option value ="none">2</option>
          <option value ="3">3</option>
          <option value ="none">4</option>
          <option value ="none">5</option>
          <option value ="none">6</option>
          <option value ="none">7</option>
          <option value ="none">8</option>
          <option value ="none">9</option>
        </select> 
        
      </div>
      {
          showButton ? "" :  <button onClick={handleStep} >{textButton}</button>
        }
      </div>
    );
  }
  
  export default Finish;
  