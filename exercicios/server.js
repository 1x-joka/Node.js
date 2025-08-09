// Criando um servidor HTTP com Node.js

import http from 'http'
const PORT = 8000

const server = http.createServer((req, res) => {
    /*
    res.setHeader('Content-Type', 'text/html') // Faz o navegador renderizar a página como HTML, e não como texto puro
    res.statusCode = 404 // Define o código de status HTTP da resposta (200 = sucesso, 404 = não encontrado e 500 = erro interno)
   res.writeHead(500, { 'Content-Type': 'application/json' }) // Definindo que vai ter erro interno (500) e terá conteúdo JSON
   res.end(JSON.stringify({message: 'Server Error'})) // JSON.stringify() transforma o objeto { message: 'Server Error' } em uma string JSON ({"message":"Server Error"})
   */
   res.writeHead(500, { 'Content-Type': 'text/html' })
   res.end('<h1>Hello World</h1>')
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})