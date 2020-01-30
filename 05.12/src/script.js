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

function task2() {
  let room = {
      number: 23
  };

  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };

  // 循環参照
  room.occupiedBy = meetup;
  meetup.self = meetup;

  alert( JSON.stringify(meetup, function replacer(key, value) {
    if (key != "" && value == meetup)  return undefined;
    return value;
  }));
}
task2();
