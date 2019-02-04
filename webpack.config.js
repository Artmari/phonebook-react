// Babel npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
// .babelrc : {"presets": ["@babel/preset-env", "@babel/preset-react"]}
//npm i css-loader style-loader -D

const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    plugins: [
        htmlPlugin,
        new CopyWebpackPlugin([
            {
              from: './src/img',
              to: './img'
            }, 
            {
                from: './src/app',
                to: './app'
            },
            {
                from: './src/css',
                to: './css'
            }  
          ])
        ]
  };