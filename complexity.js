/* Поиск наиболее часто встречающихся элементов в массиве */

const arr = ['a', 'b', 'a', 'b', 'b'];

/* 1. Перебор всех значений в лоб.
Сложность по времени: N**2; сложность по памяти: N. */

function notEffectiveGetRepeats(list){
    let sym = '';
    let counter = 0;

    for(let i = 0; i < list.length; i++){
        let currentSym = list[i];
        let currentCounter = 0;

        for(let j = 0; j < list.length; j++){
            if(currentSym === list[j])
                currentCounter++;                
        }

        if(currentCounter > counter){
            sym = currentSym;
            counter = currentCounter;
        }
    }
    
    return {
        sym,
        counter
    }
}

/* 2. Фильтрация уникальных значений через new Set() и их сравнение
cо всеми позициями в массиве.
Сложность по времени: N * K = N**2; сложность по памяти: N + K = N. */

function moreEffectiveGetRepeats(list){
    let sym = '';
    let counter = 0;
    const uniq = Array.from(new Set(list));

    for(let i = 0; i < uniq.length; i++){
        const currentSym = uniq[i];
        let currentCounter = 0;
        for(let j = 0; j < list.length; j++){
            if(currentSym === list[j])
                currentCounter++;
        }
        if(currentCounter > counter){
            counter = currentCounter;
            sym = currentSym;
        }        
    }

    return {
        sym,
        counter
    }
}

/* 3. Внесение элементов массива в объект, где ключи равны этим 
элементам, а значения - количество повторений.
Сложность по времени: N; сложность по памяти: N + K = N.  */

function getRepeats(list){
    const repeats = {};
    let sym = '';
    let counter = 0;

    for(let i = 0; i < list.length; i++){
        const now = list[i];

        if(!repeats[now])
            repeats[now] = 0;

        ++repeats[now];
    }

    for(let key in repeats){
        if(repeats[key] > counter){
            sym = key;
            counter = repeats[key];
        }            
    }

    return {
        sym,
        counter
    };
}

notEffectiveGetRepeats(arr);
moreEffectiveGetRepeats(arr);
getRepeats(arr);