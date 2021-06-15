function isGrows(list){
    list = list.split(' ')
               .map(num => Number(num));

    if(!list.length || list.length === 1)
        return 'NO';

    let prev = list[0];

    for(let i = 1; i < list.length; i++){
        if(list[i] <= prev)
            return 'NO';
        prev = list[i];  
    }

    return 'YES';
}

isGrows('1 7 9');
isGrows('1 9 7');
isGrows('2 2 2');