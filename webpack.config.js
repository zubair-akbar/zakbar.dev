const path = require('path');

module.exports = {
  mode: 'development',
	devtool: 'source-map',
  entry: path.resolve(__dirname, 'client'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
		rules: [
			{
				test: /\.(js|jsx|eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},

		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
};
