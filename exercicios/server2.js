import {createServer} from 'http'
const PORT = process.env.PORT || 3000

const users = [
    {id:1, name: 'John Doe'},
    {id:2, name: 'Jane Doe'},
    {id:3, name: 'Jim Doe'}
]

const server = createServer((req, res) => {
    if (req.url === '/api/users' && req.method === 'GET') { // req.url === '/api/users': Verifica se o caminho da URL acessada é exatamente "/api/users"; req.method === 'GET': Verifica se o método HTTP da requisição é GET
        res.setHeader('Content-Type', 'application/json') // "Avisando" que eu estou mandando um JSON e não um HTML por exemplo
        res.write(JSON.stringify(users)) // Pega o array "users", transforma em uma string JSON e escreve essa string no corpo da resposta HTTP (res.write) para mandar pro cliente
        res.end()
    } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') { // Usando regex para pegar URL's que tenham um numero no final; match: Retorna um array com o texto que percorreu o regex inteiro e o grupo ([0-9]+) que é o número capturado (ID do user)
        const id = req.url.split('/')[3] // Pegando o id do usuário e quebrando a URL pelo "/" e pegando o quarto item (índice 3) do array
        const user = users.find((user) => user.id === parseInt(id)) // users.find: Procura no array users o primeiro objeto que atenda à condição... ; (user) => user.id === parseInt(id): Condição de que o id do objeto seja igual ao número passado na URL
        res.setHeader('Content-Type', 'application/json')
        if (user) {
            res.write(JSON.stringify(user))
        } else {
            res.statusCode = 404
            res.write(JSON.stringify({message: 'User not found'})) // {message: 'User not found'}: Cria um objeto JS com uma chave 'message'
        }
        res.end()
    } else {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 404
        res.write(JSON.stringify({message: 'Route not found'}))
        res.end()
    }
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})