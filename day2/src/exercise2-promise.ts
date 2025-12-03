function getRandomNumbers(): Promise<number[]> {
    return new Promise((resolve) => {
        const arr: number[] = [];

        for (let i = 0; i < 10; i++) {
            arr.push(Math.floor(Math.random() * 20) + 1)
        }

        resolve(arr);
    })
}

getRandomNumbers()
    .then((numbers: number[]) => {
        console.log("Array: ", numbers);
        return numbers;
    })
    .then((numbers: number[]) => {
        const greaterThan10: number[] = numbers.filter(num => num > 10);
        console.log("Numbers > 10: ", greaterThan10);
        return greaterThan10;
    })
    .then((greaterThan10: number[]) => {
        const sum: number = greaterThan10.reduce((acc, val) => acc + val, 0);
        console.log("Sum of Numbers > 10:", sum);
    })