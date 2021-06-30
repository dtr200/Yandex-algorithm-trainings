/*
    Дана последовательность положительных чисел длиной N
    и число X. Нужно найти два различных числа A и B из
    последовательности, таких что A + B = X или вернуть 
    пару 0, 0, если такой пары чисел нет
*/

// Перебор всех чисел за O(n**2)

function getMaxTwo(nums, x){
    for(let a = 0; a < nums.length; a++){
        for(let b = a + 1; b < nums.length; b++){
            if(nums[a] + nums[b] === x)
                return `${nums[a]}, ${nums[b]}`;
        }
    }
    return `0, 0`;
}

getMaxTwo([1,2,4,7,2], 9);

/* Завожу пустой сет, затем иду по массиву и проверяю есть
ли в сете число равное x - nums[i], если да, возращаю nums[i]
и значение x - nums[i], если нету, тогда добавляю nums[i]
в сет. Решение за О(n) */

function effectivegetMaxTwo(nums, x){
    const prevNums = new Set();

    for(let num of nums){
        const second = x - num;
        if(prevNums.has(second))
            return `${num} ${second}`;
        prevNums.add(num);
    }

    return `0, 0`;
}

effectivegetMaxTwo([1,2,4,7,2], 11);