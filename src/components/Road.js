import { useEffect, useRef } from "react";
import CrossRoadLight from "./CrossRoadLight";

import "./Road.css";

function Road(props) {
    // const refRoad = useRef();

    // useEffect(() => {
    //     console.log(refRoad.current);
    // }, [])

    const rotateClass = "rotate-" + props.rotate;

    return (
        <div className={"road " + rotateClass}>
            <div className="road-run" ref={props.refRoadRun}>
                <div className="road-half road-line">
                    <div className="road-half-center">&lt;-</div>
                </div>
                <div className="road-half">
                    <div className="road-half-center" ref={props.refSpawnPos}>-&gt;</div>
                </div>
            </div >
            <CrossRoadLight />
        </div >
    )
}

export default Road;