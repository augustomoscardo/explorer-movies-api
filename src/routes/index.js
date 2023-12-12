const { Router } = require('express')
const sessionsRoutes = require('./sessions.routes')
const usersRoutes = require('./users.routes')
const moviesRoutes = require('./movies.routes')
const tagsRoutes = require('./tags.routes')

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/sessions', sessionsRoutes)
routes.use('/movies', moviesRoutes)
routes.use('/tags', tagsRoutes)


module.exports = routes