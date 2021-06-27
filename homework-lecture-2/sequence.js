function getSequence(sequence){
    sequence = sequence[1]
        .split(' ')
        .map(num => Number(num));

    /*
        Внешний цикл for считает сколько цифр нужно дописать. 
        Внутренний while пытается не дать ему это сделать.
        Если while пройдет до конца (left станет > right), 
        то внешний for сделает всего 1 итерацию (i = 0)
        и в if блоке i - 1 даст -1, соответственно цикл в if
        не сработает и ничего не будет дописано.
        В другом случае, сколько раз сработает for, столько
        цифр будет дописано -1.
    */
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