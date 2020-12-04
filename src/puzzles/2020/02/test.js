const input = '1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc';

module.exports = [
  [
    {
      input,
      expected: 2,
    },
  ],
  [
    {
      input,
      expected: 1,
    },
  ],
];
