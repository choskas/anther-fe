import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { any, number, z } from 'zod'

const studentSchema = z.object({
  id: z.number().int().min(1),
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
  first_name: z.string().min(1, { message: 'This field has to be filled.' }),
  last_name: z.string().min(1, { message: 'This field has to be filled.' }),
  credit: z.number().int().min(1)
})

type Student = z.infer<typeof studentSchema>

const createPostSchema = studentSchema.omit({ id: true })

const fakeStudents: Student[] = [
  {
    id: 1,
    email: 'juan.perez@example.com',
    first_name: 'Juan',
    last_name: 'Perez',
    credit: 30
  },
  {
    id: 2,
    email: 'maria.lopez@example.com',
    first_name: 'Maria',
    last_name: 'Lopez',
    credit: 28
  },
  {
    id: 3,
    email: 'carlos.garcia@example.com',
    first_name: 'Carlos',
    last_name: 'Garcia',
    credit: 32
  },
  {
    id: 4,
    email: 'ana.martinez@example.com',
    first_name: 'Ana',
    last_name: 'Martinez',
    credit: 26
  },
  {
    id: 5,
    email: 'luis.rodriguez@example.com',
    first_name: 'Luis',
    last_name: 'Rodriguez',
    credit: 34
  }
]

export const studentsRoute = new Hono()
  .get('/', (c) => {
    return c.json({ students: fakeStudents })
  })
  .post('/', zValidator('json', createPostSchema), async (c) => {
    const student = await c.req.valid('json')
    fakeStudents.push({ ...student, id: fakeStudents.length + 1 })
    c.status(201)
    return c.json(student)
  })
  .get('/:id{[0-9]+}', (c) => {
    const id = Number.parseInt(c.req.param('id'))

    const student = fakeStudents.find((student) => student.id === id)
    if (!student) {
      return c.notFound()
    }
    return c.json({ student })
  })
  .delete('/:id{[0-9]+}', (c) => {
    const id = Number.parseInt(c.req.param('id'))
    const index = fakeStudents.findIndex((student) => student.id === id)

    if (index === -1) {
      return c.notFound()
    }

    const deleteStudent = fakeStudents.splice(index, 1)[0]
    return c.json({ student: deleteStudent })
  })
//.put
