function getSequenceType(list){
    if(!list.length) return;

    let prev = list[0];
    let type = {
        constant: false,
        ascending: false,
        weaklyAscending: false,
        descending: false,
        weaklyDescending: false
    };

    for(let i = 1; i < list.length; i++){
        if(list[i] > prev && 
                !type.descending &&
                !type.weaklyAscending &&
                !type.weaklyDescending &&
                !type.constant){               
            type.ascending = true;
            prev = list[i];
        }
        else if(list[i] < prev &&
                !type.weaklyAscending &&
                !type.weaklyDescending &&
                !type.ascending &&
                !type.constant){
            type.descending = true;
            prev = list[i];
        }
        else if(list[i] === prev &&
                !type.descending &&
                !type.ascending &&
                !type.weaklyAscending &&
                !type.weaklyDescending){
            type.constant = true;
            prev = list[i];        
        }
        else if(list[i] >= prev &&
                !type.descending &&
                !type.weaklyDescending){
            type.weaklyAscending = true;
            prev = list[i];
        }
        else if(list[i] <= prev &&
                !type.ascending &&
                !type.weaklyAscending){
            type.weaklyDescending = true;
            prev = list[i];
        }
        else{
            return 'RANDOM';
        }  
    }
    return type.weaklyAscending ? 'WEAKLY ASCENDING' :
           type.weaklyDescending ? 'WEAKLY DESCENDING' :
           type.ascending ? 'ASCENDING' :
           type.descending ? 'DESCENDING' : 'CONSTANT'
}

getSequenceType([
    -530, -530, -530, -530, -530, -530
]);