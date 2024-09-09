//Import server & create port
const server = require('./api/server')
const PORT = process.env.PORT || 9000

//listening

server.listen(PORT, () => {
    console.log('Hello World')
})