/*
    Задача №1. Найти самое левое вхождение числа 2
*/

function getLeftPositive(list){
    let result = -1;

    for(let i = 0; i < list.length; i++){
        if(list[i] === 2 && result === -1)
            result = i;
    }

    return result;
}

getLeftPositive([1, 2, 1, 3, 2]);

/* 
    Задача №2. Найти последнее вхождение числа 2
*/

function getLastPositive(list){
    let result = -1;

    for(let i = 0; i < list.length; i++){
        if(list[i] === 2)
            result = i;
    }

    return result;
}

getLastPositive([1, 2, 1, 3, 2]);

/* 
    Задача №3. Найти максимальное число в непустой последовательности.

    Чтобы избежать тяжелой операции присваивания, в ans храню индекс.
    Если текущий элемент больше, сохраняю его индекс.
*/

function getMax(list){
    let ans = 0;

    for(let i = 0; i < list.length; i++){
        if(list[i] > list[ans])
            ans = i; 
    }

    return list[ans]
}

getMax([1, 2, 1, 2, 3, 1]);

/* 
    Задача №4. Найти максимальное и второе по величине число 
    в непустой последовательности N, где N > 1. (max2 !== max1).
*/

function getTopNumbers(list){
    let max1 = Math.max(list[0], list[1]);
    let max2 = Math.min(list[0], list[1]);

    for(let i = 2; i < list.length; i++){
        if(list[i] > max1){
            max2 = max1;
            max1 = list[i];
        }            
        else if(list[i] > max2 && list[i] !== max1)
            max2 = list[i];
    }
    return {
        max1,
        max2
    }
}

getTopNumbers([2, 1, 3, 2, 1]);

/* 
    Задача №5. Найти минимальное четное число в последовательности N
    или вывести -1, если не существует.

    Завожу flag, который позволит войти в if с первым четным числом, 
    далее зайти можно будет только при очередном числе меньше ans.
*/

function getEven(list){
    let ans = -1;
    let flag = false;
    for(let i = 0; i < list.length; i++){
        if(list[i] % 2 === 0 && (!flag || list[i] < ans)){
            ans = list[i];
            flag = true;
        }           
    }
    return ans;
}

getEven([2, 1, 3, 2, 1, 4]);

/* 
    Задача №6. Вывести самые короткие слова последовательности через пробел.
*/

function getWords(list){
    let minLength = list[0].length;

    // Первый проход. Ищу минимальную длину слова в последовательности

    for(let word of list){
        if(word.length < minLength)
            minLength = word.length                       
    }
    
    // Второй проход. Ищу слова с найденной минимальной длинной

    /*
        Использую массив вместо строки (+= ' string'), чтобы избежать
        постоянного создания нового объекта в памяти при склейке строк.
        Добавление в массив O(1) и разовый проход с объединением в строку
    */
    const ans = [];
    for(let word of list){
        if(word.length === minLength)
            ans.push(word);
    }

    return ans.join(' ')
}

getWords(['aa', 'b', 'cc', 'd']);

/*
    Задача №7. Остров - набор столбцов различной высоты (размер блоков 1 х 1 м),
    состоящие из камня и окружены морем. Прошел дождь, вода заполнила низины,
    что не поместилось - стекло в море не повысив его уровень.
    По ландшафту острова определить, сколько блоков воды осталось 
    после дождя в низинах на острове.
*/

function getWater(list){

    // Ищу максимум по которому разделю массив на два и пройду их отдельно

    let maxPos = 0;
    for(let i = 0; i < list.length; i++){
        if(list[i] > list[maxPos])
            maxPos = i;
    }

    /*
        Массив до максимума. Если текущее число в массиве больше текущего 
        максимума, присваиваю его в текущий максимум. 
        Ответ формирую как текущий максимум - текущее число в массиве.
        Так вода не скапливается на склоне (nowMax - list[i] = 0), т.к. 
        они равны, а только в низинах (nowMax - list[i] = someNumber), 
        т.к. list[i] низины меньше nowMax.
    */

    let ans = 0;
    let nowMax = 0;    

    for(let i = 0; i < maxPos; i++){
        if(list[i] > nowMax)
            nowMax = list[i];

        ans += nowMax - list[i];
    }
    nowMax = 0;
    console.log(ans)
    /*
        Массив после максимума. Все аналогично + цикл справа
    */

    for(let i = list.length -1; i >= maxPos; i--){
        if(list[i] > nowMax)
            nowMax = list[i];
        
        ans += nowMax - list[i];
    }
    return ans;
}

getWater([2, 5, 2, 3, 6, 9, 3, 1, 3, 4, 6]);


/*
    Задача №8. Дана строка AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBB

    Нужно написать функцию RLE, которая на выходе даст строку вида:
    A4B3C2XYZD4E3F3A6B28 и сгенерирует ошибку, если на вход пришла 
    невалидная строка. Если символ встречает 1 раз, он остается без 
    изменений. Если несколько - к нему добавляется количество повторений
*/

function getRLE(list){

    // Убираю повторения

    const noRepeat = [];
    let last = '';
    for(let letter of list){
        if(letter !== last){
            noRepeat.push(letter);
            last = letter;
        }
    }

    // Возвращает символ или символ + повторения

    function pack(last, counter){
        if(counter > 1)
            return `${last}${counter}`;
        return `${last}`;
    }

    /*
        Считаю повторения. Иду по массиву, если следующий символ !== 
        прошлому lastSym, тогда передаю в функцию pack прошлый lastSym
        и сколько раз он встречался (текущая позиция i - прошлая lastPos).
        Обновляю lastPos и lastSym на текущие.
    */

    let lastSym = list[0];
    let lastPos = 0;
    const ans = [];    

    for(let i = 0; i < list.length; i++){
        if(list[i] !== lastSym){
            const value = pack(lastSym, i - lastPos);
            ans.push(value);
            lastPos = i;
            lastSym = list[i]
        }
    }
    const value = pack(list[lastPos], list.length - lastPos);
    ans.push(value);
    return ans.join('');
}

getRLE('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBB');