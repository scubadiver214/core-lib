require('webpack');
const path = require('path');

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
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'otp-core-ui.js',
    library: '@otp/core-ui',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
};
