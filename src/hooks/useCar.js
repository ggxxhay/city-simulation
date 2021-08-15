import { useRef, useState } from "react";

function useCar(props) {
    const moveIntervalTime = 10;
    const stopPosWidth = 5;
    const refCar = useRef();

    const [isVisible, setIsVisible] = useState(true);
    const [isCarPassedStopPos, setIsCarPassedStopPos] = useState(false);
    const [carPos, setCarPos] = useState({ top: 0, left: 0 });

    return [refCar, isVisible, setIsVisible, isCarPassedStopPos, setIsCarPassedStopPos, carPos, setCarPos, moveIntervalTime, stopPosWidth];
}

export default useCar;