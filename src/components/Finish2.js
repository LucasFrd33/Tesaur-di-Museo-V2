import { useState, s } from 'react';

function Finish2({ handleStep, textButton, image, text }) {

    const [,] = useState(true);




    return (
        <>
            <div className='container-finish'>
                <div>
                <h1>Félicitation !<br />
                    Tu l’as ouvert ! </h1>
                <p>{text}</p>
                </div>
                {image}
                {
                    <button onClick={handleStep} >{textButton}</button>
                }
            </div>


        </>
    );
}

export default Finish2;
