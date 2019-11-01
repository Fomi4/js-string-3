// Implement startsWith method behavior. The program asks user to enter 2 strings. You're program must check if the
// first string starts with the second one. (Just exactly like .startsWith method works)
// NOTE! YOU ARE NOT ALLOWED TO USE String.startsWith method!
// Examples:
// "Hi, my name is Steve", "Hi" -> true
// "Good evening, my name is John", "Bad" -> false

let str = prompt("Enter text:");
let substr = prompt("Enter another text:");

if(str.slice(0, str.indexOf(' ')) == substr.slice(0, substr.indexOf(' '))) {
  console.log(true);
} else {
  console.log(false);
}
