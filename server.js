import path from 'path';
import http from 'http';

import express from 'express';

import React from 'react';
import ReactSSR, { renderToString } from 'react-dom/server';

import template from './template';

const App = require('./dist/server.app').default;
// import App from './dist/server.app';
// const AppComponent = App.default;
const appString = renderToString(<App />);

// import App from './src/App';
// const appString = renderToString(<App />);

const server = express();

server.use(express.static(path.join(__dirname, '/dist')));

server.get('/', (req, res, next) => {
  res.send(
    template({
      body: appString
    })
  );
});

const HOST = '0.0.0.0';
const PORT = 8080;

http.createServer(server).listen(PORT, HOST, () => {
  console.info('Server is runing at http://%s:%d', HOST, PORT);
});
