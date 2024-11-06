const jsonServer = require('json-server')
const GHServer = jsonServer.create()
const middleware = jsonServer.defaults()
const route = jsonServer.router('db.json')
const PORT = 3000 || process.env.PORT

GHServer.use(middleware)
GHServer.use(route)
GHServer.listen(PORT, () => {
    console.log(`GHServer started at port ${PORT} and waiting for client request`);
})