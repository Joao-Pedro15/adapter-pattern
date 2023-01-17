import 'dotenv/config'
import express, { Request, response, Response } from 'express'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  return res.send("hello world")
})

const PORT = 5000 || process.env.PORT

app.listen(PORT, `SERVER RUNNING ON PORT ${PORT}`)