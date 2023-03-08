function reverseWords(str) {
  let reversed = "";
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " || i === str.length - 1) {
      let word = "";
      for (let j = start; j <= i; j++) {
        word += str[j];
      }
      reversed = word + ` ${reversed}`;
      start = i + 1;
    }
  }
  return reversed;
}


console.log(reverseWords("Hi hello welcome"));
