// Criando um servidor HTTP com Node.js

import http from 'http' // Para criar um servidor web
import fs from 'fs/promises' // Para ler arquivos de forma assíncrona (API) usando await
// Bibliotecas para trabalhar com caminhos de arquivos
import url from 'url'
import path from 'path'

const PORT = process.env.PORT || 8000 // Caso não for identificado um PORT, ele usará 8000

// GET current path
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = http.createServer(async(req, res) => { // Colocando async pois ele irá usar await posteriormente
    /*
    res.setHeader('Content-Type', 'text/html') // Faz o navegador renderizar a página como HTML, e não como texto puro
    res.statusCode = 404 // Define o código de status HTTP da resposta (200 = sucesso, 404 = não encontrado e 500 = erro interno)
    res.writeHead(500, { 'Content-Type': 'application/json' }) // Definindo que vai ter erro interno (500) e terá conteúdo JSON
    res.end(JSON.stringify({message: 'Server Error'})) // JSON.stringify() transforma o objeto { message: 'Server Error' } em uma string JSON ({"message":"Server Error"})
   */

    try {
        // Check if GET request
        if (req.method === 'GET') {
            let filePath
            if (req.url === '/') {
            filePath = path.join(__dirname, 'public', 'index.html')
        } else if (req.url === '/about') {
            filePath = path.join(__dirname, 'public', 'about.html')
        } else {
            throw new Error('Not Found')
        }
        // Lendo o HTML do disco e mandando para o cliente
        const data = await fs.readFile(filePath)
        res.setHeader('Content-Type', 'text/html')
        res.write(data)
        res.end()
        } else {
            throw new Error('Method Not Allowed')
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' })
        res.end('Server Error')
    }
    // Mostrando no console quais rota e método foram usados
    console.log(req.url)
    console.log(req.method)
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})