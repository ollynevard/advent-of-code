const getRules = (input) =>
  input.split('\n').reduce((rules, line) => {
    const parentMatch = line.match(/^([\w\s?]+) bags? contain/);
    const childMatches = line.matchAll(/(\d+) ([\w\s?]+) bags?/g);
    const children = new Map(Array.from(childMatches, (m) => [m[2], +m[1]]));
    return rules.set(parentMatch[1], children);
  }, new Map());

const bagsContainBag = (rules, bags, bag) =>
  [...bags].reduce(
    (match, [innerBag]) =>
      match ||
      bag === innerBag ||
      bagsContainBag(rules, rules.get(innerBag), bag),
    false
  );

const countValidOuterBags = (rules, bag) =>
  [...rules].reduce(
    (count, [, bags]) => count + bagsContainBag(rules, bags, bag),
    0
  );

const countInnerBags = (rules, bag) =>
  [...rules.get(bag)].reduce(
    (count, [innerBag, number]) =>
      count + number + number * countInnerBags(rules, innerBag),
    0
  );

// Puzzle answer: 121
const part1 = (input) => countValidOuterBags(getRules(input), 'shiny gold');

// Puzzle answer: 3805
const part2 = (input) => countInnerBags(getRules(input), 'shiny gold');

module.exports = { part1, part2 };
