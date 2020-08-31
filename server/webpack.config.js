const path = require('path');

module.exports = {
  entry: './server.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    modules: [path.resolve(__dirname, 'server'), 'node_modules'],
  },
};
