const { resolve } = require('path');

module.exports = {
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js$',
  moduleFileExtensions: ['js'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js}',
    '!**/node_modules/**',
    '!**/.next/**'
  ],
  moduleNameMapper: {
    '^@/apis/(.*)$': '<rootDir>/apis/$1'
  },
  transform: {}
};
