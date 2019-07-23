const path = require('path');

module.exports = {
  entry: ['./client/src/Index.js'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'client/dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules|packages/,
      },
      {
        test: /\.scss$/,
        use: [{
          loader:"style-loader"
        }, {
          loader:"css-loader"
        }, {
          loader:"sass-loader"
        }]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
