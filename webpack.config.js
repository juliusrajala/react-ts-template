const path = require('path');
const webpack = require('webpack');

const config = {
  entry: './src/App.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
      { loader: 'file-loader', test: [/\.jpe?g$/, /\.png$/], exclude: /node_modules/ },
      { test: /\.js$/, use: ["source-map-loader"], enforce: "pre" }
    ]
  },
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src/')
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};

module.exports = config;
