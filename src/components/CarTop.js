import { useState } from "react";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { LIGHT_GREEN } from "../constants/common";
import "./CarY.scss";

function CarTop(props) {
    const speed = 0.5;
    const moveIntervalTime = 10;
    const stopPosWidth = 5;

    const [isVisible, setIsVisible] = useState(true);
    const [isCarPassedStopPos, setIsCarPassedStopPos] = useState(false);
    const [carPos, setCarPos] = useState({ top: 0, left: 0 });

    const refCar = useRef();
    const lightState = useSelector((state) => state.lightY);

    const initPos = props.initPos;
    const stopPos = props.stopPos;
    const cityPos = props.cityPos;
    const onCarPassStopPos = props.onCarPassStopPos;

    const isInStopPos = (carPos != null && stopPos != null &&
        carPos.top <= (stopPos.top + stopPosWidth) &&
        carPos.top >= stopPos.top)
    const isRunning = lightState.light === LIGHT_GREEN.light || !isInStopPos;

    // init pos
    useEffect(() => {
        if (initPos != null) {
            setCarPos(() => {
                const carPos = refCar.current.getBoundingClientRect();
                const newPos = {
                    right: carPos.right,
                    height: carPos.height,
                    width: carPos.width,
                    x: carPos.x,
                    y: carPos.y,
                    // init pos...
                    left: initPos.left,
                    top: initPos.bottom - carPos.height,
                    bottom: initPos.bottom,
                };
                return newPos;
            });
        }
    }, [initPos])

    // running
    useEffect(() => {
        const moveInterval = setInterval(() => {
            if (isRunning && isVisible && carPos != null) {
                if (carPos.top <= cityPos.top) {
                    setIsVisible(false);
                }
                if (carPos.top < stopPos.top && !isCarPassedStopPos) {
                    onCarPassStopPos();
                    setIsCarPassedStopPos(true);
                }
                setCarPos(carPos => { return { ...carPos, bottom: carPos.bottom - speed, top: carPos.top - speed } });
            }
        }, moveIntervalTime);

        return () => {
            clearInterval(moveInterval);
        }
    }, [isRunning, isVisible, carPos, stopPos, onCarPassStopPos, cityPos, isCarPassedStopPos])

    return (
        <div ref={refCar} className={"carY " + (isVisible ? "" : "invicible")} style={{ left: carPos.left + "px", top: carPos.top + "px" }}>
            <div className="carFront"></div>
            <div className="carBack">{speed * 100} km/h</div>
        </div>
    )
}

export default CarTop;