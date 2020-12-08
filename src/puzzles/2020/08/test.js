module.exports = [
  [
    {
      input:
        'nop +0\nacc +1\njmp +4\nacc +3\njmp -3\nacc -99\nacc +1\njmp -4\nacc +6',
      expected: 5,
    },
  ],
  [
    {
      input:
        'nop +0\nacc +1\njmp +4\nacc +3\njmp -3\nacc -99\nacc +1\njmp -4\nacc +6',
      expected: 8,
    },
  ],
];
