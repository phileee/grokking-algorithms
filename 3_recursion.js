// Задача про фермера и количество минимальных квадратных земельных наделов поля

function findCountsOfSquare(width, height) {
    // рекурсивная функция
    function finderBaseSide(width, height) {
        // базовый случай
        if (width % height == 0) {
            return height;
        } else {
            return finderBaseSide(height, width % height);
        }
    }

    const square = finderBaseSide(width, height);

    return width * height / Math.pow(square, 2)
}

console.log(findCountsOfSquare(1680, 640))
console.log(findCountsOfSquare(500, 200))