function getPlace(list){
    let [ , values ] = list;
    values = values.split(' ')
                   .map(num => Number(num));

    let maxPos = null;
    let maxNum = 0;
    let maxs = [];

    // Ищу максимальную дальность

    for(let i = 0; i < values.length; i++){
        if(values[i] > maxNum){
            maxPos = i;
            maxNum = values[i];
        } 
    }

    // Ищу индексы всех максимальных одинаковых бросков
    
    for(let i = maxPos; i < values.length; i++){
        if(values[i] === maxNum)
            maxs.push(i);
    }

    let distance = 0;

    /* Иду по массиву индексов максимальных бросков, ставлю их
    в массив values и проверяю на заданные условия и ищу
    дистанцию броска Васи */

    for(let i = 0; i < maxs.length; i++){
        const current = maxs[i] + 1; // возможный Василий
        const next = maxs[i] + 2 // Следующий после него
        
        if((values[current] % 10 === 5 ) &&
           values[next] < values[current])
           distance = values[current];
    }

    /* Ищу позицию. Если дистанция есть, тогда сравниваю 
    поочередно полученную дистанцию с каждой из массива */

    let position = 0;

    const calcPosition = () => {
        for(let i = 0; i < values.length; i++){
            if(values[i] > distance)
                position++;
        }
    }

    if(distance){
        position++;
        calcPosition();
    }

    return `${position}`;
}

getPlace(['7', '45 5 40']);
