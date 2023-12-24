import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import PostcssPresetEnv from 'postcss-preset-env'
import webpack from 'webpack'

const mode = process.env.MODE || 'development'

module.exports = {
	mode,
	entry: './src/index.ts',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
		assetModuleFilename: 'assets/[name][ext]',
		clean: true,
	},

	module: {
		rules: [
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
			{
				test: /\.(c|sa|sc)ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [PostcssPresetEnv],
							},
						},
					},
					'group-css-media-queries-loader',
					{
						loader: 'resolve-url-loader',
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.ts$/,
				use: ['ts-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.(png)$/,
				type: 'asset/resource',
				generator: {
					filename: path.join('assets', 'images', '[name][ext]'),
				},
			},
			{
				test: /\.(svg)$/,
				type: 'asset/resource',
				generator: {
					filename: path.join('assets', 'icons', '[name][ext]'),
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				type: 'asset/resource',
				generator: {
					filename: path.join('assets', 'fonts', '[name][ext]'),
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'index.html'),
		}),
		new MiniCssExtractPlugin({
			filename: '[name][contenthash].css',
		}),
	],
	resolve: {
		extensions: ['.ts', '.js'],
		alias: {
			src: path.resolve(__dirname, 'src'),
			fonts: path.resolve(__dirname, 'src/assets/fonts'),
			icons: path.resolve(__dirname, 'src/assets/icons'),
			images: path.resolve(__dirname, 'src/assets/images'),
			styles: path.resolve(__dirname, 'src/assets/styles'),
			scripts: path.resolve(__dirname, 'src/scripts'),
		},
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'build'),
		},
		compress: true,
		port: 3000,
		open: true,
		hot: true,
	},
} as webpack.Configuration
