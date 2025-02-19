const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // Remove console logs
            drop_debugger: true, // Remove debugger statements
            passes: 2, // Run minification twice for better results
          },
          output: {
            comments: false, // Remove comments
          },
        },
      }),
    ],
  },
};
