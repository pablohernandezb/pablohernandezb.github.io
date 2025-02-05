const config = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '^.+\\.md$': 'markdown-to-jsx',
  },
  transformIgnorePatterns: ["/node_modules/(?!lightbox\\.js-react)"],
};

module.exports = config;
