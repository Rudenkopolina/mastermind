export const checkCombination = (inputNumbers, combination) => {
    let rightNumbers = 0;
    let rightPosition = 0;
    inputNumbers.forEach((number, index) => {
        const indexInCombination = combination.findIndex(item => item === number);
        if (indexInCombination !== -1) {
            rightNumbers += 1;
            if (indexInCombination === index) {
                rightPosition += 1;
            }
        }
    })
    return { rightNumbers, rightPosition }
}