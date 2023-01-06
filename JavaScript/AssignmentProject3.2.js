function Assignment3_2(){
  array = prompt('Enter an array from 1 to 100 with commas between each number.');
  array.sort();
  if (array.length==1) window.alert('No missing numbers');
  else if (array[0] !== 1) window.alert('1 is the missing number.');
  else if (array[array.length - 1] !== 100) window.alert('100 is the missing number.');
  else {
      for (let i = 1; i < array.length; i++) {
          if (array[i] - array[i - 1] > 1) {
              window.alert(`${array[i - 1] + 1} is the missing number.`);
              break;
          } 
      }
  }
}