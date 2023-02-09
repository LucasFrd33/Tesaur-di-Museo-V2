import {useState, useRef} from 'react';

function Finish({handleStep,textButton}) {
    const [showButton, setShowButton] = useState(true);

    const Chiffre1 = useRef()
    const Chiffre2 = useRef()
    const Chiffre3 = useRef()

  
    function handleChange(e){
      if(Chiffre1.current.value === "2" && Chiffre2.current.value === "8" && Chiffre3.current.value === "9"){
        const show = showButton
        console.log("COUCOUYU")
        setShowButton(!show)
      }
    }
    
    return (
      <div className="container">
         <select ref={Chiffre1} name="Chiffre1" onChange={handleChange}>
          <option value ="none">3</option>
          <option value ="none">5</option>
          <option value ="none">1</option>
          <option value ="none">8</option>
          <option value ="2">2</option>
          <option value ="none">7</option>
          <option value ="none">9</option>
        </select> 
        <select ref={Chiffre2} name="Chiffre2" onChange={handleChange}>
          <option value ="none">3</option>
          <option value ="none">5</option>
          <option value ="none">1</option>
          <option value ="none">2</option>
          <option value ="8">8</option>
          <option value ="none">7</option>
          <option value ="none">9</option>
        </select> 
        <select ref={Chiffre3} name="Chiffre3" onChange={handleChange}>
          <option value ="none">3</option>
          <option value ="none">5</option>
          <option value ="none">1</option>
          <option value ="none">8</option>
          <option value ="9">9</option>
          <option value ="none">7</option>
          <option value ="none">2</option>
        </select> 
        {
          showButton ? "" :  <button onClick={handleStep} >{textButton}</button>
        }
      </div>
    );
  }
  
  export default Finish;
  