const config = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '^.+\\.md$': 'markdown-to-jsx',
    '^.+\\.svg$': '<rootDir>/src/__mocks__/svg.js',
  },
  transform: {
    '^.+\\.(js|ts|tsx|jsx|mjs)$': require.resolve('babel-jest'),
  },
  transformIgnorePatterns: ['/node_modules/(?!@react-hook|lightbox\\.js-react|exifr|jest-runtime)'],
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  setupFiles: ['./setupTest.js'],
};

module.exports = config;
