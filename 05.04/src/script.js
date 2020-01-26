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
task2();

