import { useState } from "react";

function Collapse (props) {
    const [active, setActive] = useState(false);
    const { useListItem } = props; // Nouvelle prop pour déterminer la balise à utiliser
    const {isDescription} = props;
    const handleToggle = () => {
      setActive(!active);
    };
  
    if (useListItem) {
      return (
        <li className={`collapse ${active && "active"}`}>
          <h2 onClick={handleToggle}>{props.title}</h2>
          <p className="collapse-content">{props.description}</p>
        </li>
      );
    } else if (isDescription){
      return (
        <div className={` description collapse ${active && "active"}`}>
          <h2 onClick={handleToggle}>{props.title}</h2>
          <p className="collapse-content">{props.description}</p>
        </div>
      );
    } else {
        return (
          <div className={` equipments collapse ${active && "active"}`}>
            <h2 onClick={handleToggle}>{props.title}</h2>
            <p className="collapse-content">{props.equipements}</p>
          </div>
        );
  }
}
  
    export default Collapse