const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	target: "node",
	externals: [nodeExternals()],	
	mode: 'none',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					plugins: ["@babel/plugin-transform-runtime"]
				}
			}
		]
	}
}
