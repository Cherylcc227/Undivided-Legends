const path = require("path");
let SRC_DIR = path.join(__dirname, "/client");
let DIST_DIR = path.join(__dirname, "/client/dist");

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
      // ,
      // {
      //   test: /\.html$/,
      //   use: "html-loader"
      // },
      // /*Choose only one of the following two: if you're using
      // plain CSS, use the first one, and if you're using a
      // preprocessor, in this case SASS, use the second one*/
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"],
      // },
      // {
      //   test: /\.scss$/,
      //   use:[
      //     "style-loader",
      //     "css-loader",
      //     "sass-loader"
      //   ],
      // },
    ],
  },

  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  //   plugins: [
  //     new HTMLWebpackPlugin({
  //       template: "index.html"
  //     }),
  //   ]
};
