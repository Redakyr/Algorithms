function binario(number, n) {
    let max = number.length;
    let min = 0;
    let mid = 0;
    
    for (let i = 1; i < Math.floor(number.length / 2); i++) {
        mid = Math.floor((max+min)/2)
        if (number[mid] == n) {
            console.log(`The program ran ${i} times and the item "${n}" is at the index ${mid}`);
            break;
        } else if (n < number[mid]) {
            max = mid-1;
        } else if (n > number[mid]) {
            min = mid+1;
        };
    };
};

binario([1,2,3,4,5,6,7,8,9,10], 1);
