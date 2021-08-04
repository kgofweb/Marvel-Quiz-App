import { useRef, useEffect, useState } from 'react';

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

  // Display btn
  const displayBtn = btn && (
    <>
      <div className="leftBox">
        <button className="btn-welcome">S'inscrire</button>
      </div>
      <div className="rightBox">
        <button className="btn-welcome">Se connecter</button>
      </div>
    </>
  )

  return (
    <main ref={refWolverine} className="welcomePage">
      { displayBtn }
    </main>
  )
}

export default Landing
