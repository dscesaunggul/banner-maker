const webpack = require("webpack");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "bundle.js"
  },
  devtool: "source-map",
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".styl"]
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: path.resolve(__dirname, "../build/assets/fonts/")
          }
        }
      },
      {
        test: /\.(png|jpeg|jpg|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: path.resolve(__dirname, "../build/assets/media/")
          }
        }
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "stylus-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Banner Maker",
      template: path.resolve(__dirname, "../template/dev.html"),
      filename: path.resolve(__dirname, "../build/index.html")
    }),
    new webpack.DefinePlugin({
      "process.env": {}
    })
  ]
};
