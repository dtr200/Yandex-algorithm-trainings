function getBillets(str){
    const [
        alloy,
        billet,
        detail
    ] = str.split(' ')
           .map(num => Number(num));

    
}

getBillets('10 5 2')