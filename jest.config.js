const config = {
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '^.+\\.md$': 'markdown-to-jsx',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!axios|lightbox\\.js-react).+\\.js$',
  ],
};

module.exports = config;
