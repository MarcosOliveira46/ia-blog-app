const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "src": path.resolve(__dirname, "src")
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
};