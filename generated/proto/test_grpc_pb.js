// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_test_pb = require('../proto/test_pb.js');

function serialize_test_GreetRequest(arg) {
  if (!(arg instanceof proto_test_pb.GreetRequest)) {
    throw new Error('Expected argument of type test.GreetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_test_GreetRequest(buffer_arg) {
  return proto_test_pb.GreetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_test_GreetResponse(arg) {
  if (!(arg instanceof proto_test_pb.GreetResponse)) {
    throw new Error('Expected argument of type test.GreetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_test_GreetResponse(buffer_arg) {
  return proto_test_pb.GreetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreetServiceService = exports.GreetServiceService = {
  greet: {
    path: '/test.GreetService/Greet',
    requestStream: false,
    responseStream: false,
    requestType: proto_test_pb.GreetRequest,
    responseType: proto_test_pb.GreetResponse,
    requestSerialize: serialize_test_GreetRequest,
    requestDeserialize: deserialize_test_GreetRequest,
    responseSerialize: serialize_test_GreetResponse,
    responseDeserialize: deserialize_test_GreetResponse,
  },
};

exports.GreetServiceClient = grpc.makeGenericClientConstructor(GreetServiceService);
