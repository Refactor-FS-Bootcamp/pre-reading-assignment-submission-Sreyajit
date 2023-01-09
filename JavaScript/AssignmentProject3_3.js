function AssignmentProject3_3() {
    str = prompt('Enter a String')
    return window.confirm(`The reverse of ${str} is ${Assignment3_3(str)}`);
}
function ReverseString(str) {
    if (str.length === 0) {
        return str;
    }
    return ReverseString(str.slice(1))+ str[0];
}