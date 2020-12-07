const getSummary = (answers) =>
  answers.reduce((map, item) => {
    [...item].forEach((question) =>
      map.set(question, map.get(question) + 1 || 1)
    );
    return map;
  }, new Map());

const getGroups = (input) => {
  return input.split('\n\n').map((group) => {
    const answers = group.split('\n');
    return { answers, summary: getSummary(answers) };
  });
};

// Puzzle answer: 6437
const part1 = (input) =>
  getGroups(input).reduce((count, group) => count + group.summary.size, 0);

// Puzzle answer: 3229
const part2 = (input) => {
  return getGroups(input).reduce(
    (count, group) =>
      count +
      [...group.summary].filter(
        (answerCount) => answerCount[1] >= group.answers.length
      ).length,
    0
  );
};

module.exports = { part1, part2 };
