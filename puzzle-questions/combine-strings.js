function combineString(str1, str2) {
  let length;

  if (str1.length < str2.length) {
    length = str2.length;
  } else {
    length = str1.length;
  }

  let newStr = "";

  for (let i = 0; i < length; i++) {
    if (i < str2.length) {
      newStr += str2[i];
    }
    if (i < str1.length) {
      newStr += str1[i];
    }
  }
  return newStr;
}

console.log(combineString("1234", "abcdefg"));
