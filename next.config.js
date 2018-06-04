// next.config.js
const withLess = require('@zeit/next-less')
const withGraphql = require('next-plugin-graphql')
const nextRuntimeDotenv = require('next-runtime-dotenv')

const withConfig = nextRuntimeDotenv({
  public: [
    'GRAPHQL_URL'
  ],

  server: [
    'SERVER_ONLY'
  ]
})

module.exports = withConfig(withGraphql(withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    minimize: true,
    sourceMap: false,
  },
})))
