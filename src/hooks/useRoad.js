import { useEffect, useRef, useState } from "react";

function useRoad() {
    const refRoadRun = useRef();
    const refSpawnPos = useRef();

    const [carIdList, setCarIdList] = useState([1]);
    const [canSpawn, setCanSpawn] = useState(true);
    const [initPos, setInitPos] = useState(null);
    const [stopPos, setStopPos] = useState(null);


    useEffect(() => {
        setInitPos(refSpawnPos.current.getBoundingClientRect());
        setStopPos(refRoadRun.current.getBoundingClientRect());
    }, [])

    useEffect(() => {
        if (canSpawn) {
            setCarIdList(carIdList => {
                const maxId = Math.max(...carIdList);
                return [...carIdList, maxId + 1];
            })
            setCanSpawn(false);
        }
    }, [canSpawn])

    const onCarPassStopPos = () => {
        setCanSpawn(true);
    }

    return [refRoadRun, refSpawnPos, carIdList, initPos, stopPos, onCarPassStopPos];
}

export default useRoad;