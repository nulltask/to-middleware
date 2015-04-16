
var middleware = require('../');
var http = require('http');
var assert = require('better-assert');
var request = require('supertest');
var express = require('express');

describe('middleware', function() {
  var app = express();
  var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
  });
  app.use('/hello', middleware(server));

  it('GET /hello', function(done) {
    request(app)
      .get('/hello')
      .expect(200)
      .expect('Content-Type', 'text/plain')
      .expect(function(res) {
        assert('Hello World\n' === res.text);
      })
      .end(done);
  });
});
