import { useSelector } from "react-redux";

import "./RoadLightX.scss";
import "./RoadLight.css";

function RoadLightX() {
    const lightState = useSelector((state) => state.lightX);

    return (
        <div className="light-container-x">
            <div className="light-counter">{lightState.counter}</div>

            <div className={"light-circle " + (lightState.light === 0 ? "light-red" : "")}></div>
            <div className={"light-circle " + (lightState.light === 2 ? "light-yellow" : "")}></div>
            <div className={"light-circle " + (lightState.light === 1 ? "light-green" : "")}></div>
        </div>
    )
}

export default RoadLightX;