// Puzzle answer: 6437
const part1 = (input) => {
  return input
    .split('\n\n')
    .map((group) => group.match(/(\w)/g))
    .reduce((count, answers) => count + new Set(answers).size, 0);
};

// Puzzle answer: 3229
const part2 = (input) => {
  return input.split('\n\n').reduce((count, group) => {
    const people = group.split('\n');
    const answers = people.reduce((map, person) => {
      person.split('').forEach((letter) => {
        const letterCount = map.has(letter) ? map.get(letter) + 1 : 1;
        map.set(letter, letterCount);
      });
      return map;
    }, new Map());

    const distinctAnswers = [...answers].filter(
      (answer) => answer[1] >= people.length
    );

    return count + distinctAnswers.length;
  }, 0);
};

module.exports = { part1, part2 };
