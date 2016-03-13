var webpack = require('webpack');

module.exports = {
  entry: './src',
  output: {
    filename: 'dist/demoComponent.min.js',
    libraryTarget: 'umd',
    library: 'demoComponent'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: ['babel'],
        query: {
          presets: ['es2015', 'react']
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]
};