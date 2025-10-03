import express from 'express'
import path from 'path'
import routes from './routes.js'
import { __dirname } from './routes.js'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../public')))
app.use(routes)

export default app