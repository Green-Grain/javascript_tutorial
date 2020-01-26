function task2() {
  let styles = ['Jazz', 'Blues'];
  console.table(styles);
  styles.push('Rock-n-Roll');
  console.table(styles);
  styles[parseInt((styles.length - 1) / 2)] = 'Classics';
  console.table(styles);
  styles.shift();
  console.table(styles);
  styles.unshift('Rap', 'Reggae');
  console.table(styles);
};
// task2();

function sumInput() {
  let inputs = [];
  while (true) {
    let input = prompt('値を入力してください', '');
    if (false == isFinite(input) || input === null || input === '') {
      break;
    }
    inputs.push(parseInt(input));
  }
  let total = 0;
  for (value of inputs) {
    total += value;
  }
  return total;
};
// console.log(sumInput());


function getMaxSubSum(arr) {
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}
function task5() {
  alert( getMaxSubSum([-1, 2, 3, -9]) );
  alert( getMaxSubSum([-1, 2, 3, -9, 11]) );
  alert( getMaxSubSum([-2, -1, 1, 2]) );
  alert( getMaxSubSum([1, 2, 3]) );
  alert( getMaxSubSum([100, -9, 2, -3, 5]) );
}
task5();

