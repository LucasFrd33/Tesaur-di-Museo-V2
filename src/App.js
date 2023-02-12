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
import Transition from './components/Transition';


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
        image={<img className='img-motion1' src="./img/image2.webp" alt="tt" />}
        textButton="Suivant"
        image2={<img className='img-sound' src='./img/sound.webp' alt='tt' />}
        />
      },
// Fin Intro

      {
        step: <Quiz 
        title={<h1 className='h1-quiz'>Commençons le <span>1er</span> jeu !</h1>}
        text={<p className='text-quiz'>Rendez-vous dans la salle : "Les années <span>1910-1940</span> : du cubisme au retour à l’ordre."</p>}
        textButton="Jouer"
        image={<img className='img-quiz' src='./img/group-122.webp' alt='tt'/>}
        handleStep={()=>handleStep(3)}
        />
      },
      {
        step:
        <Motion2
        handleStep={()=>handleStep(4)}
        image={<img className='img-motion2' src='./img/image2.webp' alt='tt'/>}
        image2={<img className='img-sound' src='./img/sound.webp' alt='tt' />}
        textButton="Suivant"
        />
      },
      {
        step:
        <Resume 
        handleStep={()=>handleStep(5)}
        image={<img className='img-resume1' src='./img/img-resume1.webp' alt='tt'/>}
        textButton="Suivant"
        title={<h1 className='h1-resume1'>Résumé du <span>1er</span> jeu </h1>}
        text={<p>Rends toi devant cette œuvre, Analyse bien le nom de ce tableau.<br/>

          Cela te donnera le 1er numéro du cadenas.</p>}
          
        />
      },
      {
        step:
        <Answer
        handleStep={()=>handleStep(6)}
        image={<img className='img-motion2' src='./img/image2.webp' alt='tt'/>}
        textButton="Suivant"
        />,
      },
      {
        step:
        <Award
        image={<img className='img-motion2' src='./img/image2.webp' alt='tt'/>}
        handleStep={()=>handleStep(7)}
        textButton="Suivant"
        />
      },
      // Rajouter ici la page 11 du Figma
      {
        step:
        <Transition
        title={<h1>Tu as un petit message 
          d’Albert Marquet :</h1>}
        text={<p className='text-transition1'>Je te complimente d’avoir trouver le bon numéro !<br/>
        <br/>
        Tu vas bientôt faire la connaissance d’un personnage que j’ai peint dans une de mes autres œuvres ! <br/>
        Il est venu spécialement pour toi et va t’aider dans ta quête !<br/>J’étais heureux de te rencontrer !</p>}
        image={<img className='img-transition' src='./img/group-122.webp' alt='tt'/>}
        handleStep={()=>handleStep(8)}
        textButton="Suivant"
        />
      },

      // Deuxieme jeu
      {
        step: <Quiz 
        title={<h1>Pour ce <span>2ème</span> jeu, 
          il va falloir lever les yeux du téléphone.</h1>}
        text={<p>Et être attentif à l’environnement autour de toi !</p>}
        textButton="Jouer"
        handleStep={()=>handleStep(9)}
        image={<img className="img-quiz2" src="./img/img-quiz2.webp" alt="tt" />}
        />
      },
      {
        step:
        <Motion3
        handleStep={()=>handleStep(10)}
        image={<img className="img-motion3" src="./img/img-motion3.webp" alt="tt" />}
        image2={<img className='img-sound' src='./img/sound.webp' alt='tt' />}
        textButton="Suivant"
        />
      },
      {
        step:
        <Resume2 
        handleStep={()=>handleStep(11)}
        textButton="Suivant"
        title={<h1 className='h1-resume2'>Résumé du <span>2eme </span>jeu </h1>}
        text={<p>Viens à ma rencontre ! <br/>
        Je suis l’homme au <span>chapeau melon</span> se trouvant dans la même salle que la tienne ! <br/>
        <br/>
          Révèle-moi le nom du tableau d’où je viens. <br/>
          Ainsi, je pourrais te transmettre le <span>2nd </span>chiffre du cadenas.</p>}
          image2={<img className="img-resume2" src="./img/img-resume2.webp" alt="tt" />}
        />
      },

      // 
      {
        step:
        <Answer2

        handleStep={()=>handleStep(12)}
        image={<img className="img-answer2" src="./img/img-resume2.webp" alt="tt" />}
        textButton="Suivant"
        />,
      },

      {
        step:
        <Award2
        image={<img className="img-award2" src="./img/img-quiz2.webp" alt="tt" />}
        handleStep={()=>handleStep(13)}
        textButton="Suivant"
        />,
      },
      {
        step:
        <Transition
        title={<h1>L’homme au chapeau melon a un message pour toi : </h1>}
        text={<p className='text-transition2'>Bravo, tu touches bientôt au but ! <br/>
       Je te confie à la femme allongée de Joseph Rivière.<br/>
       Elle te guidera pour découvrir le dernier numéro du cadenas. <br/>A bientôt !</p>}
       image={<img className="img-transition" src="./img/img-quiz2.webp" alt="tt" />}
        handleStep={()=>handleStep(14)}
        textButton="Suivant"
        />
      },
      {
        step: <Quiz 
        title={<h1>Pour ce <span>3ème</span> jeu, 
          il va falloir lever les yeux du téléphone.</h1>}
        text={<p>Et être attentif à l’environnement autour de toi !</p>}
        image={<img className="img-quiz3" src="./img/img-quiz3.webp" alt="tt" />}
        textButton="Jouer"
        handleStep={()=>handleStep(15)}
        />
      },
      {
        step:
        <Motion4
        image={<img className="img-motion4" src="./img/img-motion4.webp" alt="tt" />}
        image2={<img className='img-sound' src='./img/sound.webp' alt='tt' />}
        handleStep={()=>handleStep(16)}
        textButton="Suivant"
        />
      },
      {
        step:
        <Resume2
        image2={<img className="img-resume3" src="./img/img-motion4.webp" alt="tt" />}
        handleStep={()=>handleStep(17)}
        textButton="Suivant"
        title={<h1 className='h1-resume3'>Résumé du <span>3ème</span> jeu :</h1>}
        text={<p>Observe bien le tableau de Willem Van Hasselt et sa reproduction ci-dessous ! 
          Sauras tu trouver le nombre de différences entre ces deux œuvres ? Celui-ci te donnera le dernier chiffre du cadenas. </p>}
        tableau={<img alt='tableau de Willem Van Hasselt ' src='./img/Tableau.png'/>}
        />
        // Mettre l'image a agrandir
      },
      {
        step:
        <Answer3
        image={<img className="img-answer3" src="./img/img-motion4.webp" alt="tt" />}
        handleStep={()=>handleStep(18)}
        textButton="Suivant"
        retour={()=>handleStep(16)}
        buttonRetour="Retour"
        />,
      },
      {
        step:
        <Award3
        handleStep={()=>handleStep(19)}
        textButton="Suivant"
        />,
      },
      {
        step:
        <Finish
        handleStep={()=>handleStep(1)}
        textButton="Félicitation ! 
        Tu l’as ouvert ! "
        />,
      },
      //RAJOUTER UNE FIN

      //TEST
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
