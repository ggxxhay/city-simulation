import { useSelector } from "react-redux";

import "./RoadLightY.scss";
import "./RoadLight.css";

function RoadLightY() {
    const lightState = useSelector((state) => state.lightY);

    return (
        <div className="light-container-y">
            <div className="light-counter">{lightState.counter}</div>

            <div className={"light-circle " + (lightState.light === 0 ? "light-red" : "")}></div>
            <div className={"light-circle " + (lightState.light === 2 ? "light-yellow" : "")}></div>
            <div className={"light-circle " + (lightState.light === 1 ? "light-green" : "")}></div>
        </div>
    )
}

export default RoadLightY;