export default function Banner(props) {
    return (
    <section className="wrapper-banner">
      <div className="banner">
          <img src={props.image} alt="" />
          <h2>{props.title}</h2>
      </div>
    </section>    
    );
  }
  