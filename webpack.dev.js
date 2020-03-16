const path = require('path');

module.exports = {
  mode: "development",
	devtool: "inline-source-map",
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 3000,
		open: true,
		compress: true
  },
  entry: "./app/index.js",
  output: {
    filename: "index.js"
  },
  resolve: {
    extensions: [".ts", ".js", ".json"]
  }
};
