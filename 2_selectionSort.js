let chaosArray = Array(30).fill(0).map(() => Math.round(Math.random() * 20));

function selectionSort(arr) {
    let sortedArray = [];

    function findSmallestIndex(arr) {
        let smallestItem = arr[0];
        let indexOfSmallestItem = 0;

        for(let i = 1; i < arr.length; i++) {
            if (arr[i] < smallestItem) {
                smallestItem = arr[i];
                indexOfSmallestItem = i;
            }
        }

        return indexOfSmallestItem;
    }

    for (let i of arr) {
        let smallestIndex = findSmallestIndex(arr);
        sortedArray.push(arr.splice(smallestIndex, 1));
    }

    return sortedArray;
}

console.log(selectionSort(chaosArray));