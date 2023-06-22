import React from 'react';
import logements from '../logements.json';
import Card from '../components/Card';
import Banner from '../components/Banner';
import imageBannerHome from '../assets/banner_home.png'

export default function Home () {
    return (
      <div className='Home'>
        <Banner image = {imageBannerHome} title = "Chez vous, partout et ailleurs" imageClassName="home-banner-image" banner ="home-banner" alt ="paysage de rochers sur un littoral " />
        <section className='container-cards'>
        {logements.map((logement)=> (
            <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
        ))}
        </section>
      </div>
    )
}
