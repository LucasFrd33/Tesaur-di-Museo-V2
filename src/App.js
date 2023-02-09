import {useState} from 'react';
// import Explanation from './components/Explanation';
import Quiz from './components/Quiz';
import Intro from './components/Intro'
import Motion1 from './components/Motion1'
import Motion2 from './components/Motion2'
import Motion3 from './components/Motion3'
import Answer from './components/Answer'
import Answer2 from './components/Answer2'
import Resume from './components/Resume'
import Award from './components/Award';
import Award2 from './components/Award2';
import Motion4 from './components/Motion4';
import Resume2 from './components/Resume2';
import Answer3 from './components/Answer3';
import Award3 from './components/Award3';
import Finish from './components/Finish';
import Popup from './components/popup';


function App(){
    const [stepSetup, setStepSetup] = useState(0);

    const stepPage = [


      {
        step:
        <Intro
        transcription={true}
        handleStep={()=>handleStep(1)}
        textButton="Commencer"
        title={<h1 className='titre'>Tesaur</h1>}
        />
      },
      
      {
        step:
        <Motion1 
        handleStep={()=>handleStep(2)}
        textButton="Suivant"
        />
      },
// Fin Intro

      {
        step: <Quiz 
        title={<h1 className='h1-quiz'>Commençons le 1er jeu !</h1>}
        text={<p className='text-quiz'>Rendez-vous dans la salle : Les années 1910-1940 : du cubisme au retour à l’ordre.</p>}
        textButton="Jouer"
        handleStep={()=>handleStep(3)}
        image={<img className="img-quiz-1" src="./img/group-122.webp" alt="tt" />}
        />
      },
      {
        step:
        <Motion2
        handleStep={()=>handleStep(4)}
        textButton="Suivant"
        />
      },
      {
        step:
        <Resume 
        handleStep={()=>handleStep(5)}
        textButton="Suivant"
        title={<h1>Résumé du 1er jeu </h1>}
        text={<p>Rend toi devant cette œuvre, Analyse bien le nom de ce tableau.<br/>

          Cela te donnera le 1er numéro du cadenas.</p>}
        />
      },
      {
        step:
        <Answer
        handleStep={()=>handleStep(6)}
        textButton="Suivant"
        />,
      },
      {
        step:
        <Award
        handleStep={()=>handleStep(7)}
        textButton="Suivant"
        />
      },
      // Rajouter ici la page 11 du Figma


      // Deuxieme jeu
      {
        step: <Quiz 
        title={<h1>Pour ce 2ème jeu, 
          il va falloir lever les yeux du téléphone.</h1>}
        text={<p>Et être attentif à l’environnement autour de toi !</p>}
        textButton="Jouer"
        image={<img className="img-quiz-1" src="./img/group-122.webp" alt="tt" />}
        handleStep={()=>handleStep(7)}
        />
      },
      {
        step:
        <Motion3
        handleStep={()=>handleStep(9)}
        textButton="Suivant"
        />
      },
      {
        step:
        <Resume 
        handleStep={()=>handleStep(10)}
        textButton="Suivant"
        title={<h1>Résumé du 2ieme jeu </h1>}
        text={<p>Rend toi devant cette œuvre, Analyse bien le nom de ce tableau.<br/>

          Cela te donnera le 1er numéro du cadenas.</p>}
        />
      },

      // 
      {
        step:
        <Answer2
        handleStep={()=>handleStep(11)}
        textButton="Suivant"
        />,
      },

      {
        step:
        <Award2
        handleStep={()=>handleStep(12)}
        textButton="Suivant"
        />,
      },
      // Rajouter  ici la page 19
      {
        step: <Quiz 
        title={<h1>Pour ce 3ème jeu, 
          il va falloir lever les yeux du téléphone.</h1>}
        text={<p>Et être attentif à l’environnement autour de toi !</p>}
        textButton="Jouer"
        handleStep={()=>handleStep(13)}
        />
      },
      {
        step:
        <Motion4
        handleStep={()=>handleStep(14)}
        textButton="Suivant"
        />
      },
      {
        step:
        <Resume2
        handleStep={()=>handleStep(15)}
        textButton="Suivant"
        title={<h1>Résumé du 3ème jeu :</h1>}
        text={<p>Observe bien le tableau de Willem Van Hasselt et sa reproduction ci-dessous ! 
          Sauras tu trouver le nombre de différences entre ces deux œuvres ? Celui-ci te donnera le dernier chiffre du cadenas. </p>}
        />
        // Mettre l'image a agrandir
      },
      {
        step:
        <Answer3
        handleStep={()=>handleStep(16)}
        textButton="Suivant"
        />,
      },
      {
        step:
        <Award3
        handleStep={()=>handleStep(17)}
        textButton="Suivant"
        />,
      },
      {
        step:
        <Finish
        handleStep={()=>handleStep()}
        textButton="Suivant"
        />,
      },
    ]
    function handleStep(i){
      const set = i
      setStepSetup(set)
    }
    

  return (
    <>
    {
      stepPage[stepSetup].step
    }
    </>
  );
}


export default App;
