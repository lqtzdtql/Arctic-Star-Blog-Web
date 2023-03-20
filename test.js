let str = 'abca';
let i = 0;
let j = str.length - 1;
let num = 0;
let lab;
const arr = str.split('');
while (i < j) {
  if (arr[i] !== arr[j]) {
    let temp = arr[i] < arr[j] ? arr[i] : arr[j];
    arr.splice(i, 1, temp);
    arr.splice(j, 1, temp);
    lab = [i, j];
    num++;
  }
  i++;
  j--;
}
if (num === 1) {
  arr.splice(lab[0], 1, 'a');
  arr.splice(lab[1], 1, 'a');
}
if (num === 0) {
  for (let m = 0; m < arr.length; m++) {
    if (arr[m] !== 'a') {
      arr.splice(m, 1, 'a');
      arr.splice(arr.length - 1 - m, 1, 'a');
    }
  }
}
console.log(arr.join(''));
