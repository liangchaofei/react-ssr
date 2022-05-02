import React from 'react'
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom'
import Routes from '../Routes';

export const render = (req) => {
    const content = renderToString((
        <Router location={req.path}  context={{}}>
            {Routes}
        </Router>
    ))

    return `
    <html>
    <head>
      <title>ssr</title>
    </head>
    <body><div id='root'>${content}</div></body>
    <script src='/index.js'></script>
  </html>
    `
}