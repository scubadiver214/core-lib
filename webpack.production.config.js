require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: ['/src/', 'node_modules'],
    extensions: ['.ts', '.js'],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ parallel: 4 })],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'otp-core-ui.js',
    library: '@otp/core-ui',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
};
