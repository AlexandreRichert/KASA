import logements from '../logements.json';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default function Accomodation() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  const pictures = logement.pictures.map((photo) => (
    <img key={photo} src={photo} alt="" />
  ));    

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };
  
  const previousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

    return (
      <div className="home">
        <h1>My progression</h1>
        {pictures.length > 0 ? (
        <>
          <img src={pictures[currentIndex].props.src} alt={` ${currentIndex}`} />
          <i class="fa-solid fa-chevron-left" onClick={previousImage}></i>
          <i class="fa-solid fa-chevron-right" onClick={nextImage}></i>
        </>
      ) : (
        <p>Aucune image disponible.</p>
      )}      
      </div>
    );
  }