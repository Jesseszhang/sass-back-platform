var path = require('path')
var config = require('../config')
var utils = require('./utils')
var webpack = require('webpack')
var projectRoot = path.resolve(__dirname, '../')

module.exports = {
  entry: {
    app: './src/main.js',
    vendors:['jquery','bootstrap-loader']
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['', '.vue', '.js'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'serviceDir': path.resolve(__dirname, `${config.global.root}/service`),
      'src': path.resolve(__dirname, config.global.srcDir),
      'assets': path.resolve(__dirname, config.global.assetDir),
      'components': path.resolve(__dirname, config.global.componentDir),
      'comDir':path.resolve(__dirname, config.global.comDir),
      'vuexDir': path.resolve(__dirname, `${config.global.srcDir}/vuex`),
      'scssDir': path.resolve(__dirname, `${config.global.srcDir}/scss`),
      'router': path.resolve(__dirname, config.global.routerDir),
      'appUtil':path.resolve(__dirname, config.global.utilDir)
    },
    modulesDirectories: [path.join(__dirname, config.global.scssDir)]
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      loader: 'babel',
      include: projectRoot,
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.(html|tpl)$/,
      loader: 'html-loader'
    }, {
      test: /\.(css|scss)$/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      }
    }]
  },
  babel: {
    'presets': ['es2015'],
    'plugins': ['transform-runtime']
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: utils.cssLoaders()
  },
  devtool: config.sourceMap,
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
}
