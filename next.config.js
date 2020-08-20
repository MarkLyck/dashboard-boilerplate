const path = require('path')
const withPlugins = require('next-compose-plugins')
const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')

const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

const lessConfig = {
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        'primary-color': '#0066E8',
      },
      javascriptEnabled: true,
    },
  },
}

module.exports = withPlugins([[withCSS], [withLess, lessConfig]], {
  webpack: (config, { isServer }) => {
    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TsconfigPathsPlugin())
    } else {
      config.resolve.plugins = [new TsconfigPathsPlugin()]
    }
    // config.resolve.alias['mapbox-gl/dist/mapbox-gl.css'] = path.resolve(__dirname, 'src/empty.js')
    // config.plugins.push(
    //   // ignore ANTD chunk styles [mini-css-extract-plugin] warning
    //   new FilterWarningsPlugin({ exclude: /Conflicting order/ })
    // )
    config.plugins.push(
      // ignore ANTD chunk styles [mini-css-extract-plugin] warning
      new AntdDayjsWebpackPlugin()
    )

    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }

    return config
  },
})
