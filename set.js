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

/*
    Дан словарь из N слов, длина каждого не превосходит К.
    В записи каждого из М слов текста (каждое длиной до К)
    может быть пропущена одна буква. Для каждого слова
    сказать, входит ли оно (возможно, с одной пропущенной
    буквой) в словарь
*/

/* Решение: Выбрасываю из каждого слова по одной букве 
всеми способами за O(n * k) и ложу эти слова в сет. Дальше
проверяю есть ли такое слово за О(1). 
Сложность: O(NK**2 + M), где
N - количество возможных слов в словаре,
К - перебор позиции внутри слова, где буду удалять по букве +
    конструирование нового слова без буквы К - 1,
М - слова из text (2-й параметр) */

function checkWord(dictionary, text){
    const goodWords = new Set(dictionary);

    for(let word of dictionary){
        const currentWord = word.split('');
        for(let i = 0; i < currentWord.length; i++){
            const newWord = [
                ...currentWord.slice(0, i),
                ...currentWord.slice(i + 1)
            ]
            goodWords.add(newWord.join(''));
        }
    }
    const answer = [];
    for(let word of text){
        answer.push(goodWords.has(word))
    }
    return answer;
}

/* Это слово даст варианты: abcd, bcd, acd, abd, abc. Если в 
слове К букв, количество возможных слов = К + 1 */

checkWord(
    ['abcd', 'jfgt', 'opet'],
    ['bcd', 'fgt', 'rrt']
);