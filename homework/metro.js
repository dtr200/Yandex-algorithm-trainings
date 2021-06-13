function getTime(values){
    const [
        trackA, // интервал на первом пути
        trackB, // интервал на втором пути
        trainsA, // кол-во поездов на первом пути
        trainsB // кол-во поездов на втором пути
    ] = values;

    const minA = trackA * (trainsA -1) + trainsA;
    const maxA = minA + trackA * 2;
    const minB = trackB * (trainsB -1) + trainsB;
    const maxB = minB + trackB * 2;
    
    const minTime = Math.max(minA, minB);
    const maxTime = Math.min(maxA, maxB);
    if(minTime > maxTime)
        return -1;

    return `${minTime} ${maxTime}`;
}

getTime([1, 3, 3, 2]);