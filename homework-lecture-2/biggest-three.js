function getBiggestThree(list){
    list = list.split(' ').map(num => 
        Number(num));

    // Если числа всего 3, тогда их возвращаю
    if(list.length === 3)
        return `${list[0]} ${list[1]} ${list[2]}`;

    // Сортирует первые n чисел в порядке убывания
    const getFirst = (n) => 
        list.slice(0, n)
            .sort((a, b) => b - a);

    let [ 
        max1,
        max2,
        max3 
    ] = getFirst(3);

    let [
        min2,
        min1
    ] = getFirst(2);

    /*
        Иду циклом от i = 2 для минусовых и i = 3 для плюсовых и переставляю числа если они попадают под условия
    */

    for(let i = 2; i < list.length; i++){
        if(list[i] > max1 && 
           i > 2 &&
           list[i] >= 0){
            [max3, max2] = [max2, max1];
            max1 = list[i];
        }
        else if(list[i] > max2 &&
                list[i] <= max1 &&
                i > 2 &&
                list[i] >= 0){
            max3 = max2;
            max2 = list[i];
        }
        else if(list[i] > max3 &&
                list[i] <= max2 &&
                i > 2 &&
                list[i] >= 0){
            max3 = list[i];
        }
        else if(list[i] < 0 && list[i] < min1){
            min2 = min1;
            min1 = list[i];
        }
        else if(list[i] < 0 && 
                list[i] >= min1 && 
                list[i] < min2){
            min2 = list[i];
        }
    }
    const positiveMult = max1 * max2 * max3;
    const negativeMult = max1 * min1 * min2;
    return positiveMult > negativeMult ? 
        `${max1} ${max2} ${max3}` :
        `${max1} ${min1} ${min2}`;
}

getBiggestThree('-5 -30000 -12 0 -20');