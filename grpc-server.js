#!/usr/bin/env node
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('proto/test.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const greetProto = grpc.loadPackageDefinition(packageDefinition);

const GreetService = {
  Greet: (call, callback) => {
    const name = call.request.name;
    const message = `Hello, ${name}!`;

    callback(null, { message });
  },
};

const server = new grpc.Server();

server.addService(greetProto.test.GreetService.service, GreetService);

server.bind('localhost:50051', grpc.ServerCredentials.createInsecure());

server.start();
console.log('gRPC server running on http://localhost:50051');