import {createServer} from 'http'
const PORT = process.env.PORT || 3000

const users = [
    {id:1, name: 'John Doe'},
    {id:2, name: 'Jane Doe'},
    {id:3, name: 'Jim Doe'}
]

// Logger midleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
}

// JSON middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json') // "Avisando" que eu estou mandando um JSON e não um HTML por exemplo
    next()
}

// Route handler for GET /api/users
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users)) // Pega o array "users", transforma em uma string JSON e escreve essa string no corpo da resposta HTTP (res.write) para mandar pro cliente
    res.end()
}

// Route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3] // Pegando o id do usuário e quebrando a URL pelo "/" e pegando o quarto item (índice 3) do array
        const user = users.find((user) => user.id === parseInt(id)) // users.find: Procura no array users o primeiro objeto que atenda à condição... ; (user) => user.id === parseInt(id): Condição de que o id do objeto seja igual ao número passado na URL
    if (user) {
            res.write(JSON.stringify(user))
        } else {
            res.statusCode = 404
            res.write(JSON.stringify({message: 'User not found'})) // {message: 'User not found'}: Cria um objeto JS com uma chave 'message'
        }
        res.end()
}

// Not found handler
const NotFoundHandler = (req, res) => {
    res.statusCode = 404
    res.write(JSON.stringify({message: 'Route not found'}))
    res.end()
}

const server = createServer((req, res) => {
    logger(req, res, () => {
        jsonMiddleware(req, res, () => {
            if (req.url === '/api/users' && req.method === 'GET') {
                getUsersHandler(req, res)
            } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
                getUserByIdHandler(req, res)
            } else {
                NotFoundHandler(req, res)
            }
        })
    })
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})