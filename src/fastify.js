const Fastify = require('fastify').default
const FastifyStatic = require('fastify-static').default
const FastifyPointOfView = require('point-of-view').default
const path = require('path')
const ejs = require('ejs')

const fastify = Fastify({
  logger: true
})

// 静态资源
fastify.register(FastifyStatic, {
  root: path.join(__dirname, 'public/css'),
  prefix: '/css'
})

// 模板引擎
fastify.register(FastifyPointOfView, {
  engine: {
    ejs: ejs
  },
  root: path.join(__dirname, 'public'),
  viewExt: 'ejs'
})

module.exports = fastify
