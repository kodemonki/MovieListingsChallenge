var path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const WorkboxPlugin = require("workbox-webpack-plugin");

const workboxPlugin = new WorkboxPlugin.GenerateSW({
  swDest: "sw.js",
  clientsClaim: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: new RegExp("https://"),
      handler: "cacheFirst"
    }
  ]
});

const WebpackPwaManifest = require("webpack-pwa-manifest");

const webpackPwaManifest = new WebpackPwaManifest({
  filename: "manifest.json",
  name: "MovieListingsChallenge",
  short_name: "MovieListingsChallenge",
  description: "MovieListingsChallenge",
  theme_color: "grey",
  background_color: "#ffffff",
  inject: true,

  icons: [
    {
      src: path.resolve("src/images/icon.jpg"),
      sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
      destination: path.join("images", "icons")
    },
    {
      src: path.resolve("src/images/large-icon.jpg"),
      size: "1024x1024", // you can also use the specifications pattern
      destination: path.join("images", "icons")
    }
  ]
});

module.exports = {
  output: {
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(s*)css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [htmlWebpackPlugin, workboxPlugin, webpackPwaManifest]
};
