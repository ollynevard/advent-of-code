module.exports = [
  [
    {
      input: 'BFFFBBFRRR',
      expected: 567,
    },
    {
      input: 'FFFBBBFRRR',
      expected: 119,
    },
    {
      input: 'BBFFBBFRLL',
      expected: 820,
    },
    {
      input: 'BBFFBBFRLL\nFFFBBBFRRR\nBBFFBBFRLL',
      expected: 820,
    },
  ],
  [
    {
      input: 'FFFFFFFLLL\nFFFFFFFLRL',
      expected: 1,
    },
  ],
];
