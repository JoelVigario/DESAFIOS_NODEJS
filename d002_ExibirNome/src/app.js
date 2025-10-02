import express from 'express'
import path from 'path'
import { __dirname } from './routes.js'
import routes from "./routes.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true })) // receber dados do formulário
app.use(express.static(path.join(__dirname, '../public'))) // usar arquivos estaticos
app.use(routes)

export default app