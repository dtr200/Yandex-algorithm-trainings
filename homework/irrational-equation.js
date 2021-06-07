function irrationalEquation(values){
    const [a, b, c] = values;

    if( c < 0 || a == 0 && c**2 - b !== 0)
        return 'NO SOLUTION';
    else if(a === 0 && c**2 === b)
        return 'MANY SOLUTIONS';
    else 
        return (c**2 - b)%a === 0 ?
            (c**2 - b)/a : 'NO SOLUTION';

}

irrationalEquation([1, 0, 0]);