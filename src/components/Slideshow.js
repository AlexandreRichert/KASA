import React, { useState } from 'react'

export default function Slideshow(props) {
// Initialisation de l'useState pour changer d'image
const [currentIndex, setCurrentIndex] = useState(0);

// Tableau des images du logement
const pictures = props.pictures.map((photo) => (
    <img key={photo} src={photo} alt="" />
  )); 

//Fonction pour afficher l'image suivante
const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
};

// Fonction pour afficher l'image précédente
const previousImage = () => {
setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
};

return (
    <div className='slideshow'>
    {props.pictures.length > 1 ? (
            <>
              <img src={pictures[currentIndex].props.src} alt={` ${currentIndex}`} />
              <i className="fa-solid fa-chevron-left" onClick={previousImage}></i>
              <i className="fa-solid fa-chevron-right" onClick={nextImage}></i>
              <p className='index-pictures' >
              {currentIndex + 1}/{props.pictures.length}
              </p>
            </>
          ) : (
            <img src={pictures[currentIndex].props.src} alt={` ${currentIndex}`} />
          )}      
    </div>

  )
}
