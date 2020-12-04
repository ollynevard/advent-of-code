const getPassportFromInput = (input) => input.split('\n\n');

const getPassportFields = (passport) =>
  Object.fromEntries(
    passport.match(/([^\s]+):([^\s]+)/g).map((field) => field.split(':'))
  );

const hasRequiredFields = (fields) =>
  ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'].reduce(
    (isValid, field) => isValid && field in fields,
    true
  );

const isValidDate = (date, from, to) => date >= from && date <= to;

const isValidHeight = (height) => {
  const [, value, unit] = height.match(/^(\d+)(cm|in)$/) || [];

  if (unit === 'cm') {
    return value >= 150 && value <= 193;
  }

  return value >= 59 && value <= 76;
};

const isValidHairColor = (color) => color.match(/^#[0-9a-f]{6}$/) !== null;

const isValidEyeColor = (color) =>
  color.match(/^(amb|blu|brn|gry|grn|hzl|oth)$/) !== null;

const isValidPassportId = (id) => id.match(/^\d{9}$/) !== null;

// Puzzle answer: 250
const part1 = (input) => {
  return getPassportFromInput(input).reduce(
    (validPassports, passport) =>
      validPassports + hasRequiredFields(getPassportFields(passport)),
    0
  );
};

// Puzzle answer: 158
const part2 = (input) => {
  return getPassportFromInput(input).reduce((validPassports, passport) => {
    const fields = getPassportFields(passport);

    return (
      validPassports +
      (hasRequiredFields(fields) &&
        isValidDate(fields.byr, 1920, 2002) &&
        isValidDate(fields.iyr, 2010, 2020) &&
        isValidDate(fields.eyr, 2020, 2030) &&
        isValidHeight(fields.hgt) &&
        isValidHairColor(fields.hcl) &&
        isValidEyeColor(fields.ecl) &&
        isValidPassportId(fields.pid))
    );
  }, 0);
};

module.exports = { part1, part2 };
