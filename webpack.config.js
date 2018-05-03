const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        loader: "file-loader",
      },
    ],
  },
  resolve: {
    alias: {
      'src': path.resolve(__dirname, 'src'),
      'bundles': path.resolve(__dirname, 'src', 'bundles'),
    },
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Thunderbird Analog Recording Studio",
      template: path.resolve(__dirname, 'build', '_index.html'),
    })
  ],
}
