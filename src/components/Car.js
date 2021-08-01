import { useState } from "react";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { LIGHT_GREEN } from "../constants/common";
import "./Car.css";

function Car(props) {
    const speed = 0.5;
    const moveIntervalTime = 10;

    const [carPos, setCarPos] = useState({ top: 0, left: 0 });

    const refCar = props.refCar;
    const initPos = useRef();

    const lightState = useSelector((state) => state.xLight);
    const currentPos = refCar.current != null ? refCar.current.getBoundingClientRect() : null;
    const stopPos = props.refRoadRun.current != null ? props.refRoadRun.current.getBoundingClientRect() : null;

    const isInStopPos = (currentPos != null && stopPos != null &&
        (currentPos.left + currentPos.width) >= (stopPos.left + stopPos.width - 5) &&
        (currentPos.left + currentPos.width) <= (stopPos.left + stopPos.width))
    const isRunning = lightState.light === LIGHT_GREEN.light || !isInStopPos;

    // init pos
    useEffect(() => {
        const pos = initPos.current = props.refSpawnPos.current.getBoundingClientRect();
        // refCar.current.style.top = pos.top + "px";
        // refCar.current.style.left = pos.left + "px";
        setCarPos({ left: pos.left, top: pos.top });
    }, [props.refSpawnPos, refCar])

    // running
    useEffect(() => {
        let car = refCar.current;
        const moveInterval = setInterval(() => {
            if (isRunning) {
                let currentLeft = car.style.left.replace("px", "");
                let currentLeftNum = 0;
                if (currentLeft != null && currentLeft !== "") {
                    currentLeftNum = parseFloat(currentLeft);
                    if (currentLeftNum > 500) {
                        currentLeftNum = initPos.current.left;
                    }
                }
                // car.style.left = currentLeftNum + speed + "px";
                setCarPos((state) => { return { left: currentLeftNum + speed, top: state.top } });
            }
        }, moveIntervalTime);

        return () => {
            clearInterval(moveInterval);
        }
    }, [refCar, initPos, isRunning])

    return (
        <div ref={refCar} className="car" style={{ left: carPos.left + "px", top: carPos.top + "px" }}>
            <div className="carBack">{speed * 100} km/h</div>
            <div className="carFront"></div>
        </div>
    )
}

export default Car;