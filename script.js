// iteration
function fibs(num) {
    if (num <= 0) return []
    if (num === 1) return [0]

    const fibsArr = [0, 1]
    while (fibsArr.length < num) {
        const nextFib = fibsArr[fibsArr.length - 1] + fibsArr[fibsArr.length - 2]
        fibsArr.push(nextFib)
    }
    return fibsArr
}

// Recursive fibonacci function
function fibsRec(num) {

    if (num === 0) return 0
    if (num === 1) return num

    return fibsRec(num - 1) + fibsRec(num - 2)
}

console.log(fibsRec(3))