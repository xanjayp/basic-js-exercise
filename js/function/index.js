// Write a JavaScript function that reverses a number. Example x = 32243; Expected Output : 34223
const rev = (word) => {
  const result = word.split("").reduce((acc, char) => char + acc, "");
  console.log(result);
};
rev("hey");
