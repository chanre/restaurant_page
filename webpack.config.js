const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        title: 'My Restaurant Page',
        filename: 'index.html',
        inject: 'body',
    }),
  ],
  module: {
    rules: [
        {
        test: /\.css$/i,
        use: [
            'style-loader',
            'css-loader', 
        ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
    ]
  },
};