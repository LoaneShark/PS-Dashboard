var $path = require("path");

module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: '.\\src\\main.js',

  // Put your normal webpack config below here
  mode: "production",
  devtool: "source-map",
  output: {
    path: $path.join(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "[name].js",
    chunkFilename: "[name].js"
  },
  target: "electron-main"
  // endconfig

  node: {
  	__dirname: false,
  	__filename: false
  },
  module: {
    rules: require('./webpack.rules'),
  },
};
