export default function Banner(props) {
    return (
    <section className="wrapper-banner">
      <div className= {props.banner}>
          <img className= {props.imageClassName} src={props.image} alt={props.imageAlt} />
          <h2>{props.title}</h2>
      </div>
    </section>    
    );
  }
  