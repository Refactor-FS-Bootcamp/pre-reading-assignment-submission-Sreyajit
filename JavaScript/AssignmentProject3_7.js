function cumulativeSum(arr) {
    const result = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      result.push(sum);
    }
    return result;
  }
  function  AssignmentProject3_7(){
    const result = cumulativeSum(window.prompt('Enter a comma-separated list of numbers:').split(',').map(str => parseInt(str, 10)));
    window.alert(result);
  }