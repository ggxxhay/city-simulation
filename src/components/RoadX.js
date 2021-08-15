import RoadLightX from "./RoadLightX";
import useRoad from "../hooks/useRoad";

import "./RoadX.scss";
import CarRight from "./CarRight";
import CarLeft from "./CarLeft";

export function RoadRight(props) {
    const [refRoadRun, refSpawnPos, carIdList, initPos, stopPos, onCarPassStopPos] = useRoad();

    return (
        <div className="road-right" >
            <div className="road-run" ref={refRoadRun}>
                <div className="road-half road-line">
                    <div className="road-half-center">&larr;</div>
                </div>
                <div className="road-half">
                    <div className="road-half-center" ref={refSpawnPos}>&rarr;</div>
                </div>
            </div >
            <RoadLightX />

            {carIdList.map(id => <CarRight key={id} initPos={initPos} stopPos={stopPos} cityPos={props.cityPos} onCarPassStopPos={onCarPassStopPos} />)}
        </div >
    )
}

export function RoadLeft(props) {
    const [refRoadRun, refSpawnPos, carIdList, initPos, stopPos, onCarPassStopPos] = useRoad();

    return (
        <div className="road-right" >
            <RoadLightX />
            <div className="road-run rotate-180" ref={refRoadRun} >
                <div className="road-half road-line">
                    <div className="road-half-center">&larr;</div>
                </div>
                <div className="road-half">
                    <div className="road-half-center" ref={refSpawnPos}>&rarr;</div>
                </div>
            </div >

            {carIdList.map(id => <CarLeft key={id} initPos={initPos} stopPos={stopPos} cityPos={props.cityPos} onCarPassStopPos={onCarPassStopPos} />)}
        </div >
    )
}
