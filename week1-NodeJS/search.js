
 numbers=process.argv.slice(3);
 key=process.argv[2];
 function binarySearch(arr, key) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);
        if (Number(arr[mid] )=== key) {
            return mid;
        }
        if (Number(arr[mid]) < key) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}
console.log(binarySearch(numbers,key)); 