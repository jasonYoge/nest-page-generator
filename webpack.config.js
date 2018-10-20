const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

console.log(path.resolve(__dirname, './src/components/index.tsx'));

module.exports = {
  devtool: 'source-map',
  watch: true,
  target: 'web',
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, 'components/index.tsx')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader!sass-loader',
          fallback: 'style-loader'
        })
      },
      {
        test: /\.tsx$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules|src/,
      }
    ]
  },
  plugins: [ 
    new ExtractTextPlugin({
      filename: 'index.css'
    }),
    // new webpack.ProgressPlugin()
    new ProgressBarPlugin()
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};