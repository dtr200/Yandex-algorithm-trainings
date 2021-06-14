function isNumberExist(values){
    const nums = values.map(num => {
        const purified = num.replace(/[^0-9]/g, '');
        if(purified.length === 11)
            return purified.substring(1);
        if(purified.length === 7)
            return `495${purified}`;
    })

    const wannaAdd = nums.shift();

    const result = nums.map(num => 
        num === wannaAdd ? 'YES' : 'NO')

    return result.join(' '));
}


isNumberExist([
    '8(495)430-23-97', 
    '+7-4-9-5-43-023-97', 
    '4-3-0-2-3-9-7', 
    '8-495-430'
]);