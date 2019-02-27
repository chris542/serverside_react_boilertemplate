import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './app/app';

const server = express();
server.use('/static', express.static('assets'))

server.get('/*', (req,res) => {
    const context = {};
    console.log(`Req server`)
    const app = renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    const indexFile = path.resolve('./public/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }

        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        );
    });
})



const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});
