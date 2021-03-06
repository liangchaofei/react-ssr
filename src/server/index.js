import express from 'express'
import { render } from './utils'

const app = express()
app.use(express.static('public'))
const port = 3000


app.get('*', (req, res) => {
  res.send(render(req))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})