function findDuplicate(str) {
  let bucket = {};
  for (let i = 0; i < str.length; i++) {
    if (bucket[str[i]]) {
      bucket[str[i]]++;
    } else {
      bucket[str[i]] = 1;
    }
  }
  for (letter in bucket) {
    if (bucket[letter] > 1) {
      console.log(letter);
    }
  }
}

findDuplicate("fhdghirtwhdkjgshfe");
