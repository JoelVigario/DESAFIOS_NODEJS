import { Router } from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const routes = Router()
const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)

// Rotas
routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
})

routes.post('/resultado', (req, res) => {
    let num = Number(req.body.num)
    let antecessor = num - 1
    let sucessor = num + 1

    res.status(200).send(`
        <!DOCTYPE html>
        <html lang="pt-pt">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Resultado</title>
            <link rel="stylesheet" href="estilo.css">
        </head>
        <body>
            <section>
                <h1>Resultado</h1>
                <p>O Antecessor de ${num} é ${antecessor}</p>
                <p>O Sucessor de ${num} é ${sucessor}</p>
            </section>
        </body>
        </html>
    `)
})

export default routes