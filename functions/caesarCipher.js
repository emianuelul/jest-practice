function is_alphabetic(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

function caesarCipher(string, offset) {
  let result = new String();

  for (let i = 0; i < string.length; i++) {
    if (!is_alphabetic(string[i])) {
      result += string[i];
      continue;
    }
    let oldCode = string.charCodeAt(i);
    let newCode;

    if (string[i].toLowerCase() === string[i]) {
      newCode = 'a'.charCodeAt(0) + ((oldCode - 'a'.charCodeAt(0) + offset) % 26);
    } else if (string[i].toUpperCase() === string[i]) {
      newCode = 'A'.charCodeAt(0) + ((oldCode - 'A'.charCodeAt(0) + offset) % 26);
    }

    result += String.fromCharCode(newCode);
  }

  return result;
}

export { caesarCipher };
