export default function Banner(props) {
    return (
      <div className="Banner">
          <img src={props.image} alt="" />
          <h2>{props.title}</h2>
      </div>
    );
  }
  