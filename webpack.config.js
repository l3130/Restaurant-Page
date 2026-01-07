// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: "./dist",
    open: true, // Auto-open browser
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Use our custom HTML skeleton
      filename: "index.html",
    }),
  ],
  module: {
    rules: [
      // Rule for CSS
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // Rule for Images (optional, but good practice)
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};