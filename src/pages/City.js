import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { lightActionsX } from "../store/lightSlice";

import "./City.scss";

import { RoadLeft, RoadRight } from "../components/RoadX";
import { RoadBottom, RoadTop } from "../components/RoadY";

function City() {
    const dispatch = useDispatch();

    const [cityPos, setCityPos] = useState();

    const refCity = useRef();

    useEffect(() => {
        setCityPos(refCity.current.getBoundingClientRect())
    }, [])

    // dispatch light state
    useEffect(() => {
        const lightStateInterval = setInterval(() => {
            dispatch(lightActionsX.run());
        }, 1000);

        return () => {
            clearInterval(lightStateInterval);
        }
    }, [dispatch])

    return (
        <div className="city" ref={refCity}>
            <div className="city-row">
                <div className="city-block"></div>
                <RoadBottom cityPos={cityPos} />
                <div className="city-block"></div>
            </div>
            <div className="city-row">
                <RoadRight cityPos={cityPos} />
                <div className="city-cross-road"></div>
                <RoadLeft cityPos={cityPos} />
            </div>
            <div className="city-row">
                <div className="city-block"></div>
                <RoadTop cityPos={cityPos} />
                <div className="city-block"></div>
            </div>
        </div>
    )
}

export default City;