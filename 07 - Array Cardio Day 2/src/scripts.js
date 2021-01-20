// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

function getYear() {
  const now = new Date();
  return now.getFullYear();
}
console.table(people);
// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
console.log("Is at least one person 19 or older?");
const isOnePersonOldEnough = people.some((person) => {
  return getYear() - person.year >= 19;
});

console.log(isOnePersonOldEnough);
// Array.prototype.every() // is everyone 19 or older?
console.log("Is everyone 19 or older?");
const isEveryPersonOldEnough = people.every((person) => {
  return getYear() - person.year >= 19;
});

console.log(isEveryPersonOldEnough);
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
console.log("Find the comment with the ID of 823423");
const findComment = comments.find((comment) => comment.id === 823423);
console.table(findComment);
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
console.log("Before finding index and delete");
console.table(comments);

comments.splice(
  comments.findIndex((comment) => comment.id === 2039842),
  1
);
console.log("After finding index and delete");
console.table(comments);
