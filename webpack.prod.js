const webpack = require ('webpack');
const path = require ('path');
const fs = require ('fs');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const PreloadWebpackPlugin = require ('preload-webpack-plugin');
const CleanWebpackPlugin = require ('clean-webpack-plugin');
const CopyPlugin = require ('copy-webpack-plugin');

require ('dotenv').config ();

const config = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    app: './src/index',
  },
  output: {
    path: path.resolve (__dirname, 'dist'),
    filename: '[name].[hash].bundle.js',
    publicPath: process.env.WP_PUBLIC_PATH,
  },
  optimization: {
    noEmitOnErrors: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin ({
      'process.env.NODE_ENV': JSON.stringify (process.env.NODE_ENV),
      'process.env.SC_HOSTNAME': JSON.stringify (process.env.SC_HOSTNAME),
      'process.env.SC_PORT': JSON.stringify (process.env.SC_PORT),
    }),
    new CopyPlugin ([
      {
        from: 'public',
        to: '.',
      },
    ]),
    new HtmlWebpackPlugin ({
      template: './src/templates/index.html',
      analytics: true,
    }),
    new PreloadWebpackPlugin ({
      rel: 'preload',
      include: 'allAssets',
      fileWhitelist: [
        /\.js$/,
        /\.woff2$/,
      ],
    }),
    new MiniCssExtractPlugin ({ filename: 'styles.css' }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          {
            loader: 'linaria/loader',
            options: { sourceMap: false },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: false },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif|woff|woff2|eot|ttf|svg)$/,
        use: [{ loader: 'file-loader' }],
      },
    ],
  },
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
};

module.exports = config;
