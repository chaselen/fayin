const fastify = require('../fastify')

fastify.get('/', (req, rep) => {
  rep.view('index')
})
