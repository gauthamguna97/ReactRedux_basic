module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'build/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            "@babel/preset-react"
          ],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.css', '.js', '.jsx']
  },
};
