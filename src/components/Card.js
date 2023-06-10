function Card(props) {
  return (
        <a href={`/logement/${props.id}`} className="card">
            <img src={props.cover} alt="logement" />
            <span>{props.title}</span>
        </a>
  );
}

export default Card;