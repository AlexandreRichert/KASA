import React, { useState } from 'react'

export default function Slideshow(props) {

const [currentIndex, setCurrentIndex] = useState(0);

const pictures = props.pictures.map((photo) => (
    <img key={photo} src={photo} alt="" />
  )); 

const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
};

const previousImage = () => {
setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
};

return (
    <div className='slideshow'>
    {props.pictures.length > 0 ? (
            <>
              <img src={pictures[currentIndex].props.src} alt={` ${currentIndex}`} />
              <i className="fa-solid fa-chevron-left" onClick={previousImage}></i>
              <i className="fa-solid fa-chevron-right" onClick={nextImage}></i>
            </>
          ) : (
            <p>Aucune image disponible.</p>
          )}      
    </div>

  )
}
