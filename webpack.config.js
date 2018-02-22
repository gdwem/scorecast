const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    modules : ['./node_modules/tone/Tone/core/Tone.js', './node_modules/tone']
  },
  module: {
    rules: [
      {
        test: /\.(mp3|ogg|wav)$/,
         use: [
           'file-loader'
         ]
       },
       {
        test: /\.scss$/,
         use: [
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  plugins: [
  new Dotenv({
    path: './.env',
    safe: true
  })
  ]
}
