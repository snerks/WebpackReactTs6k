module.exports = {
    entry: './test/sum-test.tsx',
    output: {
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.tsx']
    },
    module: {
        loaders: [
          {
              test: /\.ts(x?)$/,
              loader: 'ts-loader!ts-jsx-loader'
          }
        ]
    }
};