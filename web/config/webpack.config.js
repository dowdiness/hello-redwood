module.exports = (config, { env }) => {
  if (env === 'development') {
    // Add dev plugin
  }
  config.module.rules.push({
    test: /\.elm$/,
    exclude: [/elm-stuff/, /node_modules/],
    use: [
      { loader: 'elm-hot-webpack-loader' },
      {
        loader: 'elm-webpack-loader',
        options: {
          debug: true,
        },
      },
    ],
  })

  return config
}
