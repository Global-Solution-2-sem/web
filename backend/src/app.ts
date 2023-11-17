import fastify from 'fastify'
import jwt from '@fastify/jwt'
import cors from '@fastify/cors'

const app = fastify()

app.register(jwt, {
    secret: 'AULA-DE-JS'
})

app.register(cors, {
    origin: true
})

const users = [
    {
        id: "f06ca828-966c-47bd-bcae-d8adb47cef5d",
        name: "admin",
        email: "admin@admin",
        password: "admin"
    }
]

app.post('/auth', async function (req, reply) {
    const { email, password } = req.body as { email: string, password: string }

    const userExists = users.find(user => user.email === email)

    if (userExists === undefined) {
        reply.status(400).send({ message: 'Usuário não encontrado' })
    }

    if (userExists?.password !== password) {
        reply.status(400).send({ message: 'Usuário ou senha inválidos' })
    }

    const token = app.jwt.sign(
        {
            name: userExists!.name,
            email: userExists!.email,
        },
        {
            sub: userExists!.id,
            expiresIn: '1 days',
        }
    )

    reply.status(200).send({ token })

})

app.listen({
    port: 5000,
    host: '0.0.0.0'
}).then(() => {
    console.log(`HTTP server running on port ${5000}`)
})