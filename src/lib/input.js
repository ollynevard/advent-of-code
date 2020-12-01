const toArray = (input) => {
  return input.split('\n');
}

const toNumberArray = (input) => {
  return toArray(input).map(Number);
}

const toSortedNumberArray = (input) => {
  return toNumberArray(input).sort((a, b) => a - b);
}

module.exports = {
  toArray,
  toNumberArray,
  toSortedNumberArray
}
