function task1() {
  let user = {
    name: "John Smith",
    age: 35
  };
  let json = JSON.stringify(user);
  let raw = JSON.parse(json);
  alert(raw);
  console.log(raw);
}
// task1();



