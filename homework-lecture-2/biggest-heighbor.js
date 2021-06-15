function getBiggestNeighbors(list){
    const values = list.split(' ')
                       .map(num => Number(num));

    let counter = 0;
    for(let i = 1; i < values.length -1; i++){
        if(values[i] > values[i - 1] && values[i] > values[i + 1])
            counter++;
    }
    return `${counter}`;
}

getBiggestNeighbors('1 2 3 4 5');
getBiggestNeighbors('5 4 3 2 1');
getBiggestNeighbors('1 5 1 5 1');