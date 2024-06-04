import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { serveStatic } from 'hono/bun'
import { studentsRoute } from './routes/students'

const app = new Hono()

app.use('*', logger())

const apiRoutes = app.basePath('/api').route('/students', studentsRoute)

app.get('*', serveStatic({ root: './frontend/dist' }))
app.get('*', serveStatic({ path: './frontend/dist/index.html' }))

export default app
export type ApiRoutes = typeof apiRoutes
