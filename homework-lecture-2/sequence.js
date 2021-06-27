function getSequence(sequence){
    sequence = sequence[1]
        .split(' ')
        .map(num => Number(num));

    for(let i = 0; i < sequence.length; i++){
        let left = i,
            right = sequence.length - 1;
        while( left < sequence.length &&
               right >= 0 &&
               sequence[left] === sequence[right] &&
               left <= right ){
                   left++;
                   right--;
               }
        
        if(left > right){
            const answer = [];
            for(let j = i - 1; j > -1; j--)
                answer.push(sequence[j]);

            return !answer.length ? 
                '0' : answer.join(' ');
        }
    }
}

getSequence(['9', '1 2 3 4 5'])