// Write a JavaScript function that reverses a number. Example x = 32243; Expected Output : 34223
const rev = (word) => {
  const result = word.split("").reduce((a, b) => b + a, "");
  console.log(result);
};
rev("hey");

// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
//  Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. Example string : 'The quick brown fox' Expected Output : 5
const vowel = (string) => {
  const n = string.length;
  let c = 0;
  for (i = 0; i < n; i++) {
    const word = string.split("");
    if (
      word[i] == "a" ||
      word[i] == "e" ||
      word[i] == "i" ||
      word[i] == "o" ||
      word[i] == "u"
    ) {
      c = c + 1;
    }
  }
  console.log(c);
};
vowel("The quick brown fox");
// Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.
const prime = (n) => {
  const re = "";
  for (i = 2; i <= n - 1; i++) {
    if (n % i == 0) {
      re = "np";
    }
  }
  if (re == "np") console.log("Not Prime");
  else console.log("Prime");
};
prime(11);

// Write a JavaScript function to get the number of occurrences of each letter in a specified string.
const letter = (word) => {
  const n = word.length;
  const char = word.split("");

  const re = char.reduce((a, b) => {
    // if (a == b)
    console.log(a, b);
    a = b;
  });
  // console.log(char[i]);
};
letter("Hello World");
