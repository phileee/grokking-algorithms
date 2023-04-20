let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(arr, item) {
    low = 0;
    high = arr.length;
    
    while (low <= high) {
        let middle = Math.floor((low + high) / 2);
        let temp = arr[middle];

        if (temp == item) {
            return middle;
        } else if (item < temp) {
            high = middle - 1;
        } else {
            low = middle + 1;
        }
    }

    return false;
}

console.log(binarySearch(array, 10)) // 9