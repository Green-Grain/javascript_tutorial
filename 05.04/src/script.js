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
console.log(sumInput());

