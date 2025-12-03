"use strict";
function getRandomNumbers() {
    return new Promise((resolve) => {
        const arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push(Math.floor(Math.random() * 20) + 1);
        }
        resolve(arr);
    });
}
getRandomNumbers()
    .then((numbers) => {
    console.log("Array: ", numbers);
    return numbers;
})
    .then((numbers) => {
    const greaterThan10 = numbers.filter(num => num > 10);
    console.log("Numbers > 10: ", greaterThan10);
    return greaterThan10;
})
    .then((greaterThan10) => {
    const sum = greaterThan10.reduce((acc, val) => acc + val, 0);
    console.log("Sum of Numbers > 10:", sum);
});
