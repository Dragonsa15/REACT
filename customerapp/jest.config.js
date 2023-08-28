const config = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!src/**/*.config.js',
    '!./index.js'
  ]
};

module.exports = config;
