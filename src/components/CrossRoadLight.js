import { useEffect, useReducer } from "react";

import "./CrossRoadLight.css";

const LIGHT_RED = { counter: 3, light: 0 };
const LIGHT_GREEN = { counter: 2, light: 1 };
const LIGHT_YELLOW = { counter: 1, light: 2 };

function reducerLightState(state) {
    if (state.counter === 0) {
        switch (state.light) {
            case 0: // red
                return LIGHT_GREEN;
            case 1: // green
                return LIGHT_YELLOW;
            case 2: // yellow
                return LIGHT_RED;
            default:
                throw new Error();
        }
    }
    return { counter: state.counter - 1, light: state.light };
}

function CrossRoadLight() {
    const [lightState, dispatchLightState] = useReducer(reducerLightState, LIGHT_RED);

    useEffect(() => {
        const intervalId = setInterval(() => {
            dispatchLightState({ type: 'auto' });
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    return (
        <div className="light-container">
            <div className="light-counter">{lightState.counter}</div>

            <div className={"light-circle " + (lightState.light === 0 ? "light-red" : "")}></div>
            <div className={"light-circle " + (lightState.light === 2 ? "light-yellow" : "")}></div>
            <div className={"light-circle " + (lightState.light === 1 ? "light-green" : "")}></div>
        </div>
    )
}

export default CrossRoadLight;