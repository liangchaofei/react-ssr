import express from 'express'
import React from 'react';
import Home from './containers/Home'
import { renderToString } from 'react-dom/server';

const app = express()
const port = 3000

const content = renderToString(<Home />)

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>${content}</body>
    </html>
  `)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})