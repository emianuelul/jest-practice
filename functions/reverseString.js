function reverseString(string) {
  let result = new String();
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }

  return result;
}

export { reverseString };
