// next.config.js
const withLess = require('@zeit/next-less')
const withGraphql = require('next-plugin-graphql')

module.exports = withGraphql(withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    minimize: true,
    sourceMap: false,
  },
}))
