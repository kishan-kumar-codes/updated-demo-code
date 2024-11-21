const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/widget-entry.tsx",
  output: {
    path: path.resolve(__dirname, "public/dist"),
    filename: "widget-builder.[contenthash].js",
    library: "WidgetBuilder",
    libraryTarget: "umd",
    globalObject: "this",
    // Adjusted publicPath, it should match how you are referencing assets in the browser
    publicPath: "/dist/", // Relative to your root, or where the assets will be served from
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          // Save images to the "images" folder inside the "dist" folder
          filename: "images/[name].[contenthash][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/inline",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
  mode: "production",
};
