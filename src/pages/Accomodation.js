import logements from '../logements.json';
import { useParams } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import SlideshowTitle from '../components/SlideshowTitle';
import SlideshowHost from '../components/SlideshowHost';
import SlideshowTags from '../components/SlideshowTags';
import SlideshowRating from '../components/SlideshowRating';
import Collapse from '../components/Collapse';
import Error from '../pages/Error';

export default function Accomodation() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
    
  
  if (!logement) {
    return <Error />;
  }

    return (
      <div className="accomodation">
        <Slideshow key={logement.id} {...logement} />
        <div className='wrapper-informations'>
          <div className="presentation">
              <SlideshowTitle  title ={logement.title} location ={logement.location} />
              <SlideshowTags tags ={logement.tags} />  
          </div>
          <div className="tags-ratings">
            <SlideshowHost  name={logement.host.name}  host ={logement.host.picture} />
            <SlideshowRating rating ={logement.rating} />
          </div>
        </div>
        <div className='details'>
          <Collapse title="Description" description = {logement.description} isDescription ={true}/>
          <Collapse  title="Equipements" equipements = {logement.equipments} useListItem ={false} isDescription={false}/>
        </div>     
      </div>
    );
  }