function Quiz({text, textButton, handleStep, title, image}) {


    // const imgLaunch = [
    //     {
    //         img:"https://images.pexels.com/photos/7367948/pexels-photo-7367948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //         explication:"Lancement des explications",
    //     },
    //     {
    //         img:"https://images.pexels.com/photos/366791/pexels-photo-366791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //         explication:"1er jeu",
    //     },
    //     {
    //         img:"https://images.pexels.com/photos/259209/pexels-photo-259209.jpeg?auto=compress&cs=tinysrgb&w=800",
    //         explication:"2ieme jeu",
    //     },
    //     {
    //         img:"https://images.pexels.com/photos/325154/pexels-photo-325154.jpeg?auto=compress&cs=tinysrgb&w=800",
    //         explication:"3ieme jeu",
    //     },
    // ];

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
