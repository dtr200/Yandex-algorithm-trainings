function getFree(values){
    const [ a, b, c, d, e ] = values;

    if(!a || !b || !c || !d || !e)
        return 'NO';

    if( d >= a && e >= b || 
        e >= a && d >= b || 
        d >= c && e >= b || 
        d >= b && e >= c || 
        d >= a && e >= c || 
        d >= c && e >= a)
        return 'YES';

    return 'NO';
}

getFree([1,1,1,1,1]);
