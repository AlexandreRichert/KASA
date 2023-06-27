import imageBannerAbout from '../assets/banner_about.png'
import Banner from '../components/Banner';
import collapseData from '../collapseData.json';
import Collapse from '../components/Collapse'

export default function About() {
    return (
      <div className="about">
        <Banner image = {imageBannerAbout} imageClassName="about-banner-image" banner ="about-banner" imageAlt ="paysage montagne"/>
        <section className='container-collapses'>
          <ul>
          {collapseData.map((data)=> (
            <Collapse key={data.id} id ={data.id} title={data.title} description ={data.description} useListItem ={true} />
        ))}
          </ul>
        </section>
      </div>
    );
  }