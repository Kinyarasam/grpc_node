#!/usr/bin/env node
const express = require('express');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const app = express();
const port = process.env.PORT || 3000;

const packageDefinition = protoLoader.loadSync('proto/test.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const GreetService = grpc.loadPackageDefinition(packageDefinition).test.GreetService;
const grpcClient = new GreetService('localhost:50051', grpc.credentials.createInsecure());

app.use(express.json());

app.post('/greet', (req, res) => {
  const name = req.body.name;

  grpcClient.Greet({ name }, (error, response) => {
    if (!error) {
      res.json({ message: response.message });
    } else {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
});

app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}`);
});
