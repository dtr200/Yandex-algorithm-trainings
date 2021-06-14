function setTemp(values) {
	const temps = values[0].split(' ');
	const roomTemp = +temps[0];
	const condTemp = +temps[1];
	const mode = values[1];

    switch(mode){
        case 'heat': 
            return Math.max(roomTemp, condTemp);
        case 'freeze': 
            return Max.min(roomTemp, condTemp);
        case 'auto': 
            return condTemp;
        case 'fan': 
            return roomTemp;
        default:
            return roomTemp;
    }
}

setTemp([3, 4, 5]);