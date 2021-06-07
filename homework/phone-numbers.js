function isNumberExist(values){
    const nums = values.map(num => {
        const purified = num.replace(/[^0-9]/g, '');
        if(purified.length === 11)
            return purified.substring(4);
        return purified
    })

    const wannaAdd = nums.shift();

    const result = nums.map(num => 
        num === wannaAdd ? 'YES' : 'NO')

    return result.join(' ');
}


isNumberExist([
    '8(495)430-23-97', 
    '+7-4-9-5-43-023-97', 
    '4-3-0-2-3-9-7', 
    '8-495-430'
]);

isNumberExist([
    '86406361642',
    '83341994118',
    '86406361642',
    '83341994118'
]);

isNumberExist([
    '+78047952807',
    '+78047952807',
    '+76147514928',
    '88047952807'
]);