function Assignment3_1(){
  const startDate = prompt('Enter the start date (mm/dd/yyyy):');
  const endDate = prompt('Enter the end date (mm/dd/yyyy):');
  const numDays = Math.round(Math.abs(new Date(startDate) - new Date(endDate) )/(1000 * 60 * 60 * 24));
  function windowInfo(message) {
  return window.confirm(message);
  }
  windowInfo(`There are ${numDays} days between ${startDate} and ${endDate}.`);

}
