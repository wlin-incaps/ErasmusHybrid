const path = require('path')

module.exports = {
  entry: './src/main.tsx',
	output: {
		path: path.resolve(__dirname, './www'),
		filename: '[name].js'
	},
	node: {
    __dirname: false
  },
	devtool: "source-map",
	module: {
		rules: [{
				test: /\.ts$/,
				enforce: 'pre',
				loader: 'tslint-loader',
				options: {
					typeCheck: true,
					emitErrors: true
				}
			},
			{
				test: /\.tsx?$/,
				loader: ["babel-loader", "awesome-typescript-loader"]
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			},
			{
				test: /\.js$/,
				enforce: 'pre',
				loader: 'standard-loader',
				options: {
					typeCheck: true,
					emitErrors: true
				}
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader'
			},
			{
				test: /\.(s*)css$/,
				loader: ['style-loader', 'css-loader', 'sass-loader']
			},
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg|jpg|jpeg|gif|tif|tiff|png)$/,
				loader: "file-loader",
				options: {
						name: '[name].[ext]',
						outputPath: 'fonts/'
				}
      }
		]
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
	},
	externals: {

	}
}
