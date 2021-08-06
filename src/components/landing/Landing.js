import { useRef, useEffect, useState, Fragment } from 'react';

const Landing = () => {
  // Gestion des griffes de l'image
  const refWolverine = useRef(null);
  // Gestion des button
  const [btn, setBtn] = useState(false);

  useEffect(() => {
    // Activer startingImage
    refWolverine.current.classList.add('startingImg');

    // Remove startingImage après 3s
    setTimeout(() => {
      refWolverine.current.classList.remove('startingImg');
      setBtn(true)
    }, 1000);
  }, []); // Le [] => la ff s'exécute slmt au montage du composant et pas après !

  // Animation sur les btn
  const setLeftImage = () => {
    refWolverine.current.classList.add('leftImg');
  }

  const setRightImage = () => {
    refWolverine.current.classList.add('rightImg');
  }

  // Remove abimation on btn
  const clearImage = () => {
    if(refWolverine.current.classList.contains('leftImg')) {
      refWolverine.current.classList.remove('leftImg');
    } else if (refWolverine.current.classList.contains('rightImg')) {
      refWolverine.current.classList.remove('rightImg');
    }
  }

  // Display btn
  const displayBtn = btn && (
    <Fragment>
      <div className="leftBox">
        <button 
          onMouseOver={setLeftImage}
          onMouseOut={clearImage}
          className="btn-welcome"
        >
          S'inscrire
        </button>
      </div>
      <div className="rightBox">
        <button 
          onMouseOver={setRightImage}
          onMouseOut={clearImage}
          className="btn-welcome"
        >
          Se connecter
        </button>
      </div>
    </Fragment>
  )

  return (
    <main ref={refWolverine} className="welcomePage">
      { displayBtn }
    </main>
  )
}

export default Landing
