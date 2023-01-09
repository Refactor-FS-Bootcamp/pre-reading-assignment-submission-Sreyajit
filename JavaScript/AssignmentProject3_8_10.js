function AssignmentProject3_8_10() {
    function quickSort(array) {
if (array.length <= 1) {
    return array;
}
const pivot = array[array.length - 1];
const left = [];
const right = [];
for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
    left.push(array[i]);
    } else {
    right.push(array[i]);
    }
}
return [...quickSort(left), pivot, ...quickSort(right)];
}
let sortedArray = quickSort(window.prompt('Enter a comma-separated list of numbers:').split(',').map(str => parseInt(str, 10)));
window.alert(sortedArray);
}