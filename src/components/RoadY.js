import "./RoadY.scss";
import RoadLightY from "./RoadLightY";
import CarBottom from "./CarBottom";
import useRoad from "../hooks/useRoad";
import CarTop from "./CarTop";

export function RoadBottom(props) {
    const [refRoadRun, refSpawnPos, carIdList, initPos, stopPos, onCarPassStopPos] = useRoad();

    return (
        <div className="road-bottom">
            <div className="road-run" ref={refRoadRun}>
                <div className="road-half road-line">
                    <div className="road-half-center" ref={refSpawnPos}>&darr;</div>
                </div>
                <div className="road-half">
                    <div className="road-half-center">&uarr;</div>
                </div>
            </div >
            <RoadLightY />

            {carIdList.map(id => <CarBottom key={id} initPos={initPos} stopPos={stopPos} cityPos={props.cityPos} onCarPassStopPos={onCarPassStopPos} />)}
        </div >
    )
}

export function RoadTop(props) {
    const [refRoadRun, refSpawnPos, carIdList, initPos, stopPos, onCarPassStopPos] = useRoad();

    return (
        <div className="road-bottom">
            <RoadLightY />
            <div className="road-run rotate-180" ref={refRoadRun}>
                <div className="road-half road-line">
                    <div className="road-half-center" ref={refSpawnPos}>&darr;</div>
                </div>
                <div className="road-half">
                    <div className="road-half-center">&uarr;</div>
                </div>
            </div >

            {carIdList.map(id => <CarTop key={id} initPos={initPos} stopPos={stopPos} cityPos={props.cityPos} onCarPassStopPos={onCarPassStopPos} />)}
        </div >
    )
}