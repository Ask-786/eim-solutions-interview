function secondNonRepeated(str) {
  let bucket = [];
  for (let i = 0; i < str.length - 1; i++) {
    let count = 0;
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        count = 1;
      }
    }
    if (count === 0) {
      bucket.push(str[i]);
    }
  }
  return bucket[1];
}

console.log(secondNonRepeated("bczbckbmdoc"));
