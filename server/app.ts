import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { studentsRoute } from './routes/students'

const app = new Hono()

app.use('*', logger())

app.get('/test', (c) => {
  return c.json({ message: 'test' })
})

app.route('/api/students', studentsRoute)

export default app
