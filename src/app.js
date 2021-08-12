const fastify = require('./fastify')
const path = require('path')
const fs = require('fs')

// 导入 routes 目录中所有路由
fs.readdirSync(path.join(__dirname, 'routes')).forEach(file => require('./routes/' + file))

// 启动服务
fastify.listen(10010, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // fastify.log.info(`server listening on ${address}`)
})
