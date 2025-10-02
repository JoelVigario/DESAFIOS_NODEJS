import { Router } from "express"
import path from 'path'
import { fileURLToPath } from 'url'

const routes = Router()
const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
})

routes.post('/nome', (req, res) => {
    let nome = req.body.nome

    res.status(200).send(`
        <!DOCTYPE html>
        <html lang="pt-pt">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Seu nome</title>
            <link rel="stylesheet" href="assets/estilo.css">
        </head>
        <body>
            <section>
                <h1 id="nome">Olá, ${nome}</h1>
            </section>
        </body>
        </html>
    `)
    
})

export default routes