function arrangeLaptops(str){
    if(!str)
        return '0 0';

    const values = str.split(' ')
                      .map(num => +num);

    const [
        firstWidth,
        firstHeight,
        secondWidth,
        secondHeight
    ] = values;

    const first = {
        width: firstWidth,
        height: firstHeight
    }

    const second = {
        width: secondWidth,
        height: secondHeight
    }

    let area = (1000 + 1000)**2;
    const result = [];
 
    for(let i in first){
        for(let j in second){
            const length = first[i] + second[j];
            const changeKey = (value) => 
                value === 'width' ? 'height' : 'width';

            const height = Math.max(
                first[changeKey(i)],
                second[changeKey(j)]
                );
            const res = `${length} ${height}`;
            
            const currentArea = length * height;
            if(currentArea <= area){
                area = currentArea;
                result.push(res);
            }    
        }
    }    
    return result.pop();
}

arrangeLaptops('5 7 3 2');