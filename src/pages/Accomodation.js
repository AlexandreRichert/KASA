import logements from '../logements.json';
import { useParams } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import SlideshowTitle from '../components/SlideshowTitle';
import SlideshowHost from '../components/SlideshowHost';
import SlideshowTags from '../components/SlideshowTags';
import SlideshowRating from '../components/SlideshowRating';

export default function Accomodation() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
     

    return (
      <div className="accomodation">
        <Slideshow key={logement.id} {...logement} />
        <div className="presentation">
            <SlideshowTitle  title ={logement.title} location ={logement.location} />
            <SlideshowHost  name={logement.host.name}  host ={logement.host.picture} />
        </div>
        <div className="tags-ratings">
          <SlideshowTags tags ={logement.tags} />  
          <SlideshowRating rating ={logement.rating} />
        </div>
        <div className='details'>
          
        </div>     
      </div>
    );
  }