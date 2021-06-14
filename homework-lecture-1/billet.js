function calcBillets(str){
    if(!str) return 0;
    const val = str.split(' ').map(num => Number(num));
    let [
        alloy,
        billet,
        detail
    ] = val;

    if((!alloy || !billet || !detail) ||
        (detail > billet))
        return 0;

    let details = 0;

    while(alloy >= billet && billet >= detail){
        details += Math.floor(billet/detail);
        alloy -= billet;
        alloy += billet % detail;
    }

    return `${details}`;
}

calcBillets('13 5 3');