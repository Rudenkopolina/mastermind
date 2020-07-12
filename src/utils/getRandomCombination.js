export const getRandomCombination = () => {
    const combination = [];
    while (combination.length !== 4) {
        const number = Math.floor(Math.random() * 10);
        if (!combination.includes(number)) {
            combination.push(number);
        }
    }
    return combination;
}