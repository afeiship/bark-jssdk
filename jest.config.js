// https://jestjs.io/docs/en/configuration
module.exports = {
  verbose: true,
  testRegex: [/\.spec.ts/],
  //preset: "jest-puppeteer",
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};
