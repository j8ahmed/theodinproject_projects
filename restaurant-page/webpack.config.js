const path = require('path')


module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
	test: /\.scss$/,
	use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  }
}
