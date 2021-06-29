const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/components/index.tsx",
  target: "web",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: '/'
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader",
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'build/fonts/',
                esModule: false
            },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'build/images/',
            esModule: false
          },
        },
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true }
          },
          { 
            loader: 'resolve-url-loader',
            options: {
              sourceMap: true
            }
          },
          { 
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ],
      },
      
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "components", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "./src/yourfile.css",
    }),
  ]
};
