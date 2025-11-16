function analyzeArray(array) {
  let average = array.reduce((prev, curr) => prev + curr, 0);
  average = average / array.length;

  let min = Math.min(...array);
  let max = Math.max(...array);
  let length = array.length;

  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
}

export { analyzeArray };
