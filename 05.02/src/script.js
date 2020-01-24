function task1() {
  let num1 = prompt('値1を入力してください', '');
  let num2 = prompt('値2を入力してください', '');
  alert(+num1 + +num2);
}
// task1();

function task2() {
  alert( Math.round(6.35 * 10) / 10 );
};
// task2();

function readNumber() {
  let input = NaN;
  while (isNaN(input)) {
    input = prompt('数値を入力してください', '0');
    if (null == input) return;
  }
  alert('inputed ' + input);  
};
// readNumber();

function random(min, max) {
  // while (true) {
  //   let value = Math.random() * 10;
  //   if (min <= value && value < max) {
  //     return value;
  //   }
  // }
  return min + Math.random() * (max - min);
};
alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));
