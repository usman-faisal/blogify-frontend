module.exports = {
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.js"],
  moduleNameMapper: {
    axios: "axios/dist/node/axios.cjs",
  },
  transformIgnorePatterns: ["/node_modules/(?!axios)"],
  // fix axios import error while running tests with jest
  // https://stackoverflow.com/questions/58276120/jest-transformerror-jest-preset-angular-jest-preset-js-cannot-find-module-axi
};
