'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api/getDiscList': {
        target: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
        bypass: function (req, res, proxyOptions) {
          req.headers.referer = 'https://c.y.qq.com';
          req.headers.host = 'c.y.qq.com';
        },
        pathRewrite: {
          '^/api/getDiscList': ''
        }
      },
      '/api/getTopList': {
        target: 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?format=json',
        bypass: function (req, res, proxyOptions) {
          req.headers.referer = 'https://c.y.qq.com';
          req.headers.host = 'c.y.qq.com';
        },
        pathRewrite: {
          '^/api/getTopList': ''
        }
      },
      '/api2/getRecomListNeidi': {
        target: 'https://u.y.qq.com/cgi-bin/musicu.fcg?-=recom09823581245828605&format=json&data={"comm":{"ct":24},"new_song":{"module":"newsong.NewSongServer","method":"get_new_song_info","param":{"type":1}}}',
        bypass: function (req, res, proxyOptions) {
          req.headers.referer = 'https://u.y.qq.com';
          req.headers.host = 'u.y.qq.com';
        },
        pathRewrite: {
          '^/api2/getRecomListNeidi': ''
        }
      },
      '/api2/getRecomListGangtai': {
        target: 'https://u.y.qq.com/cgi-bin/musicu.fcg?-=recom675796876915197&data={"comm":{"ct":24},"new_song":{"module":"newsong.NewSongServer","method":"get_new_song_info","param":{"type":6}}}',
        bypass: function (req, res, proxyOptions) {
          req.headers.referer = 'https://u.y.qq.com';
          req.headers.host = 'u.y.qq.com';
        },
        pathRewrite: {
          '^/api2/getRecomListGangtai': ''
        }
      },
      '/api2/getRecomListOumei': {
        target: 'https://u.y.qq.com/cgi-bin/musicu.fcg?-=recom16321017681007333&data={"comm":{"ct":24},"new_song":{"module":"newsong.NewSongServer","method":"get_new_song_info","param":{"type":2}}}',
        bypass: function (req, res, proxyOptions) {
          req.headers.referer = 'https://u.y.qq.com';
          req.headers.host = 'u.y.qq.com';
        },
        pathRewrite: {
          '^/api2/getRecomListOumei': ''
        }
      },
      '/api2/getRecomListHanguo': {
        target: 'https://u.y.qq.com/cgi-bin/musicu.fcg?-=recom8615048014595319&data={"comm":{"ct":24},"new_song":{"module":"newsong.NewSongServer","method":"get_new_song_info","param":{"type":4}}}',
        bypass: function (req, res, proxyOptions) {
          req.headers.referer = 'https://u.y.qq.com';
          req.headers.host = 'u.y.qq.com';
        },
        pathRewrite: {
          '^/api2/getRecomListHanguo': ''
        }
      },
      '/api2/getRecomListRiben': {
        target: 'https://u.y.qq.com/cgi-bin/musicu.fcg?-=recom37565166530077687&data={"comm":{"ct":24},"new_song":{"module":"newsong.NewSongServer","method":"get_new_song_info","param":{"type":3}}}',
        bypass: function (req, res, proxyOptions) {
          req.headers.referer = 'https://u.y.qq.com';
          req.headers.host = 'u.y.qq.com';
        },
        pathRewrite: {
          '^/api2/getRecomListRiben': ''
        }
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
