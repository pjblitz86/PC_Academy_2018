const path = require('path');

module.exports = {
  entry: './task2_loan_calc/src/credit.ts',
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: './task2_loan_calc/dist/transpiled.js',
    path: path.resolve(__dirname, 'dist')
  }
};