function AssignmentProject3_7_11(){
    function bubbleSort(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
            }
        }
        return arr;
    }
    const sortedNumbers = bubbleSort(window.prompt('Enter a comma-separated list of numbers:').split(',').map(str => parseInt(str, 10)));
    window.alert(sortedNumbers);
}