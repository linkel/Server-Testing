const express = require('express');

const guns = require('./data/gunsModel.js');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'online' });
});

server.get('/guns', async (req, res) => {
  const rows = await guns.getAll();

  res.status(200).json(rows);
});

module.exports = server;