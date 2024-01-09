// Write a JavaScript function that reverses a number. Example x = 32243; Expected Output : 34223
const rev = (word) => {
  const result = word.split("").reduce((acc, char) => char + acc, "");
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
