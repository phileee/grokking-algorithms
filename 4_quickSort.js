let chaosArray = Array(30).fill(0).map(() => Math.round(Math.random() * 20));

function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        let pivot = arr[0];
        let less = [];
        let greather = [];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < pivot) {
                less.push(arr[i]);
            } else {
                greather.push(arr[i]);
            }
        }

        return [...quickSort(less), pivot, ...quickSort(greather)];
    }
}

console.log(quickSort(chaosArray))

