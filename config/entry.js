const paths = require('./paths')

var webpackHotDevClient = require.resolve('react-dev-utils/webpackHotDevClient')
var entry = {
  index: [paths.appIndexJs],
  about: [paths.appSrc + '/pages/about/about.js']
}
if (process.env.NODE_ENV === 'development') {
  for (var item in entry) {
    console.log(item)
    entry[item].unshift(webpackHotDevClient)
  }
}
console.log(process.env.NODE_ENV)
module.exports.entry = entry
