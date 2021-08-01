import Road from "./Road";

import "./City.css";
import { useEffect, useRef } from "react";
import Car from "./Car";
import { useDispatch } from "react-redux";
import { xLightActions } from "../store/xLightSlice";

function City() {
    const dispatch = useDispatch();

    const refSpawnPos = useRef();
    const refRoadRun = useRef();
    const refCar = useRef();

    useEffect(() => {
        const intervalId = setInterval(() => {
            dispatch(xLightActions.run());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [dispatch])

    useEffect(() => {
        refSpawnPos.current.getBoundingClientRect();
        refCar.current.getBoundingClientRect();
    }, [])

    return (
        <div>
            <Road refSpawnPos={refSpawnPos} refRoadRun={refRoadRun} />
            <Car refCar={refCar} refSpawnPos={refSpawnPos} refRoadRun={refRoadRun} />
        </div>
    )
}

export default City;