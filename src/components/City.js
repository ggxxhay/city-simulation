import { useEffect, useRef } from "react";
import "./City.scss";

import { RoadLeft, RoadRight } from "./Road";
import Car from "./Car";
import { useDispatch } from "react-redux";
import { lightActionsX } from "../store/lightSlice";
import { RoadBottom, RoadTop } from "./RoadBottom";

function City() {
    const dispatch = useDispatch();

    const refSpawnPos = useRef();
    const refRoadRun = useRef();
    const refCar = useRef();

    useEffect(() => {
        const intervalId = setInterval(() => {
            dispatch(lightActionsX.run());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [dispatch])

    // useEffect(() => {
    //     refSpawnPos.current.getBoundingClientRect();
    //     refCar.current.getBoundingClientRect();
    // }, [])

    return (
        <div className="city">
            <div className="city-row">
                <div className="city-block"></div>
                <RoadBottom refSpawnPos={refSpawnPos} refRoadRun={refRoadRun} />
                <div className="city-block"></div>
            </div>
            <div className="city-row">
                <RoadRight refSpawnPos={refSpawnPos} refRoadRun={refRoadRun} />
                <div className="city-cross-road"></div>
                <RoadLeft refSpawnPos={refSpawnPos} refRoadRun={refRoadRun} />
            </div>
            <div className="city-row">
                <div className="city-block"></div>
                <RoadTop refSpawnPos={refSpawnPos} refRoadRun={refRoadRun} />
                <div className="city-block"></div>
            </div>

            
            {/* <RoadTop refSpawnPos={refSpawnPos} refRoadRun={refRoadRun} /> */}

            {/* <RoadRight refSpawnPos={refSpawnPos} refRoadRun={refRoadRun} />
            <Car refCar={refCar} refSpawnPos={refSpawnPos} refRoadRun={refRoadRun} /> */}
            {/* <RoadLightY />
            <RoadLightX /> */}
        </div>
    )
}

export default City;