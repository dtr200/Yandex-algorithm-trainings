function getBiggestNumbersMult(list){
    list = list.split(' ').map(num => 
        Number(num));

    if(list.length === 2){
        return list[0] > list[1] ? 
            `${list[1]} ${list[0]}` : 
            `${list[0]} ${list[1]}`;
    }

    // Считаю количество минусовых чисел

    let negative = [];
    let negativePos = [];
    let notNegative = false;

    for(let i = 0; i < list.length; i++){
        if(list[i] < 0){
            negative.push(list[i]);
            negativePos.push(i);
        }
    }

    // Если негативное только одно, тогда убираю из массива.

    if(negative.length === 1){
        list.splice(negativePos[0], 1);
        notNegative = true;
    }

    /* Ищу наибольшие значения или наименьшие среди минусовых. 
       В sign приходит false если работаю с минусовыми и 
       true для плюсовых */

    const getBigger = (nums, sign) => {
        let bigger = nums[0];
            biggerPos = 0;
            for(let i = 1; i < nums.length; i++){
                const current = nums[i];
                if( (!sign && current < bigger) ||
                    (sign && current > bigger) ){
                    bigger = current;
                    biggerPos = i;
                }              
            }
        return biggerPos;
    }

    const firstNegativePos = notNegative ? null : 
        getBigger(negative, false);
    const firstPositivePos = getBigger(list, true);

    const firstNegative = negative[firstNegativePos];
    const firstPositive = list[firstPositivePos];

    // Удаляю наибольшие значения чтобы не мешались
    negative.splice(firstNegativePos, 1);
    list.splice(firstPositivePos, 1);

    const secondNegativePos = notNegative ? null : 
        getBigger(negative, false);
    const secondPositivePos = getBigger(list, true);

    const secondNegative = negative[secondNegativePos];
    const secondPositive = list[secondPositivePos];

    const negativeMult = firstNegative * secondNegative;
    const positiveMult = firstPositive * secondPositive;

    const getResult = (first, second) => {
        return first > second ? 
            `${second} ${first}` :
            `${first} ${second}`;
    }

    let result;
    if(negativeMult > positiveMult)
        result = getResult(firstNegative, secondNegative);
    else
        result = getResult(firstPositive, secondPositive);
        
    return result;
}

getBiggestNumbersMult('-4 3 -5 2 5');