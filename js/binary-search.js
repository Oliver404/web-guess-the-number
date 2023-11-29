function binarySearch(array, target) {
    var min = 0;
    var max = array.length;
    var i = -1;

    while(min <= max) {
        const guess = Math.floor((min + max) / 2);

        if (array[guess] === target) {
            i = guess;
            break;
        }
        else if (array[guess] < target) 
            min = guess +  1;
        else 
            max = guess - 1;
    }

    return i;
}

const test = [];

for (let i = 0; i < 200; i++) {
    test.push(i);
}

console.log("===== Resultado =====");
console.log(binarySearch(test, 28));