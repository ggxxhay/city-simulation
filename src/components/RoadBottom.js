import "./RoadBottom.scss";
import RoadLightY from "./RoadLightY";

export function RoadBottom(props) {
    return (
        <div className="road-bottom">
            <div className="road-run" ref={props.refRoadRun}>
                <div className="road-half road-line">
                    <div className="road-half-center">&darr;</div>
                </div>
                <div className="road-half">
                    <div className="road-half-center" ref={props.refSpawnPos}>&uarr;</div>
                </div>
            </div >
            <RoadLightY />
        </div >
    )
}

export function RoadTop(props) {
    return (
        <div className="road-bottom">
            <RoadLightY />
            <div className="road-run rotate-180" ref={props.refRoadRun}>
                <div className="road-half road-line">
                    <div className="road-half-center">&darr;</div>
                </div>
                <div className="road-half">
                    <div className="road-half-center" ref={props.refSpawnPos}>&uarr;</div>
                </div>
            </div >
        </div >
    )
}