function getBiggestThree(list){
    list = list.split(' ').map(num => 
        Number(num));

    // Если числа всего 3, тогда их возвращаю
    if(list.length === 3)
        return `${list[0]} ${list[1]} ${list[2]}`;

    // Отфильтровывает минусовые и плюсовые числа
    const getNums = (numsList, posList, sign) => {
        for(let i = 0; i < list.length; i++){
            if( (!sign && list[i] < 0) || 
                (sign && list[i] >= 0) ){
                numsList.push(list[i]);
                posList.push(i);
            }
        }
    }

    // Считаю количество минусовых чисел
    let negative = [];
    let negativePos = [];
    let notNegative = false;

    getNums(negative, negativePos, false);

    // Считаю количество плюсовых чисел
    let positive = [];
    let positivePos = [];
    let notPositive = false;

    getNums(positive, positivePos, true);

    /*
        Если минусовое только одно, тогда убираю - 
        оно будет только уменьшать. Проверяю и отмечаю 
        если минусовых или плюсовых вообще нет
    */
    if(negative.length === 1)
        list.splice(negativePos[0], 1);
    if(!negative.length)
        notNegative = true;
    if(!positive.length)
        notPositive = true;

    /*
        Функция ищет самые большие плюсы, самые маленькие минусы и
        самые большие минусы
    */
    let counter = 0;
    const getBigger = (nums, sign) => {
        const result = [];
        while(counter <= 2 && nums[counter] !== undefined ){
            let bigger = nums[0];
            biggerPos = 0;
            for(let i = 1; i < nums.length; i++){
                const current = nums[i];    
                if( (!sign && !notPositive && current <= bigger) ||
                    (sign && current >= bigger) ||
                    (!sign && notPositive && current >= bigger) ){
                    bigger = current;
                    biggerPos = i;
                }        
            }
            nums.splice(biggerPos, 1);
            counter++;
            result.push(bigger);
        }
        return result;
    }

    let plus;
    let minus;
    const result = [];
 
    /* 
        Ситуация 1: есть минусы и плюсы. Беру топовые плюсы и
        2 самых минимальных минуса (так они дадут +)
    */
    if(!notPositive && !notNegative){
        plus = positive.length <= 3 ? [...positive] :
               getBigger(positive, true);

        counter = 0;
        minus = negative.length <= 2 ? [...negative] : 
                getBigger(negative, false)
        minus.slice(0, 2);
        // обьединяю плюсы и 2 минуса
        const union = [...plus, ...minus];
        const answer = [];
        /* 
            Перебираю все комбинации, каждую сохраняю в объект,
            где mult - результат умножения, values - комбинация       
        */
        for(let i = 0; i < union.length; i++){
            for(let j = i + 1; j < union.length; j++){
                for(let k = j + 1; k < union.length; k++){
                    const multiply = union[i] * union[j] * union[k];
                    const res = {
                        mult: multiply,
                        values: [i, j, k]
                    }
                    answer.push(res);
                }
            }
        }

        /* Сортирую по результату. Первая комбинация это 
        позиции трех самых больших чисел в объединенном массиве */
        answer.sort((a, b) => b.mult - a.mult);
        const [ one, two, three ] = answer[0].values;
        result.push(union[one], union[two], union[three]);
    }
    /* 
        Ситуация 2: есть плюсы и нет минусов. 3 топовых плюса дадут ответ
    */
    else if(!notPositive && notNegative){
        result.push(...getBigger(positive, true));
    }
    /* 
        Ситуация 3: есть минусы и нет плюсов. 3 последних минуса 
        (самые большие числа) дадут ответ
    */
    else if(!notNegative && notPositive){
        minus = getBigger(negative, false)
        .slice(-3);
        result.push(...minus);
    }

    return result.join(' ');
}

getBiggestThree('0 10 0 0 0 10');
getBiggestThree('1 2 3');