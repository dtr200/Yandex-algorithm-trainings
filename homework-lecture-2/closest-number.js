function getClosest(list){
    // Распарсиваю данные

    let [ , values, num] = list;
    values = values.split(' ')
                   .map(num => Number(num));
    num = Number(num);    

    /* closest - текущее самое близкое, 
       lacks - сколько не хватает до num
    */

    let closest = values[0];
    let lacks = Math.abs(num - closest);

    // если lacks === 0, тогда closest на первой позиции

    if(!lacks) 
        return `${closest}`;

    /*
        Иду по values, считаю разницу между num и текущим значением,
        беру ее по модулю.
        Если она == 0, тогда return.
        Если разница меньше прошлой разницы, сохраняю ее и текущее занчение. 
    */

    for(let i = 1; i < values.length; i++){
        const nowLacks = Math.abs(num - values[i]);

        if(!nowLacks)
            return `${values[i]}`;

        if(nowLacks < lacks){
            closest = values[i];
            lacks = nowLacks;
        }        
    }

    return `${closest}`;
}

getClosest(['5', '1 2 3 4 5', '6']);
getClosest(['5', '5 4 3 2 1', '3']);