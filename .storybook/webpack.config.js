const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = async ({ config, _mode }) => {
  if (config.resolve.plugins) {
    config.resolve.plugins.push(new TsconfigPathsPlugin())
  } else {
    config.resolve.plugins = [new TsconfigPathsPlugin()]
  }

  // This is required to change theme variables in ant-design
  // https://ant.design/docs/react/customize-theme
  config.module.rules.push({
    test: /\.less$/,
    loaders: [
      'style-loader',
      'css-loader',
      {
        loader: 'less-loader',
        options: {
          lessOptions: {
            modifyVars: { '@primary-color': '#0066E8' },
            javascriptEnabled: true,
          },
        },
      },
    ],
    // Failed attempt at making it ignore building other modules:
    // exclude: /node_modules\/(?!(antd)\/).*/,
    include: [path.resolve(__dirname, '../src'), /[\\/]node_modules[\\/].*antd/],
  })

  return config
}
