const rules = require('./webpack.rules');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const assets = [ '.static\\img', '.static\\css', '.static\\js', '.static\\php', '.static\\html']; // asset directories

rules.push({
  test: /\.css$/,
  use: [
   { loader: 'style-loader' },
   { loader: 'css-loader' },
   { loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
    },
   { loader: 'sass-loader' }
  ]
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  plugins: assets.map(asset => {
    return new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src', asset),
        to: path.resolve(__dirname, '.webpack/renderer', asset)
      },
      {
        from: path.resolve(__dirname, 'src', asset),
        to: path.resolve(__dirname, 'node_modules/electron/dist/resources/', asset)
      }
    ]);
  })
};
