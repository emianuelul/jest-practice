function capitalize(string) {
  let result = new String();
  result = string[0].toUpperCase();

  string = string.slice(1, string.length);
  string = result + string;

  return string;
}

export { capitalize };
