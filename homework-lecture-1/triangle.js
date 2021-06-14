function isTriangleExist(values) {
	const [a, b, c] = values;

    const isExist = () => a + b > c && 
                          a + c > b && 
                          b + c > a

    return isExist() ? 'YES' : 'NO';
}

isTriangleExist([3, 4, 5]);