function Card(props) {
  return (
    <div className="Card">
        <img src={props.cover} alt="logement" />
        <span>{props.title}</span>
    </div>
  );
}

export default Card;