import RoadLightX from "./RoadLightX";

import "./Road.scss";

export function RoadRight(props) {
    return (
        <div className="road-right" >
            <div className="road-run" ref={props.refRoadRun}>
                <div className="road-half road-line">
                    <div className="road-half-center">&larr;</div>
                </div>
                <div className="road-half">
                    <div className="road-half-center" ref={props.refSpawnPos}>&rarr;</div>
                </div>
            </div >
            <RoadLightX />
        </div >
    )
}

export function RoadLeft(props) {
    return (
        <div className="road-right" >
            <RoadLightX />
            <div className="road-run rotate-180" ref={props.refRoadRun} >
                <div className="road-half road-line">
                    <div className="road-half-center">&larr;</div>
                </div>
                <div className="road-half">
                    <div className="road-half-center" ref={props.refSpawnPos}>&rarr;</div>
                </div>
            </div >
        </div >
    )
}
