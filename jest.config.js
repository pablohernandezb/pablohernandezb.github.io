const config = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '^.+\\.md$': 'markdown-to-jsx',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',

  },
  transformIgnorePatterns: ['/node_modules/(?!@react-hook|lightbox\\.js-react)*\\.(js|tsx)$'],
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx']
};

module.exports = config;
