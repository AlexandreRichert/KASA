import { useState } from "react";

function Collapse (props) {
    const [active, setActive] = useState(false)

    const handleToggle = e => {
      setActive(!active)
    }

    return (
        <li className={`collapse ${active && "active"}`}>
            <h2 onClick={handleToggle}>{props.title}</h2>
            <p className="collapse-description">{props.description}</p>
        </li>
    )
}

export default Collapse;