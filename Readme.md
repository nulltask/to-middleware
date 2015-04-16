
# to-middleware

[![Build Status](https://travis-ci.org/nulltask/to-middleware.svg)](https://travis-ci.org/nulltask/to-middleware)

Turn from server to [connect](https://github.com/senchalabs/connect)/[express](http://expressjs.com/) middleware.

## Install

    $ npm install to-middleware

## Usage

```js
var middleware = require('to-middleware');
var express = require('express');
var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

var app = express();

app.use('/hello', middleware(server));
```

yields:

    $ curl http://localhost:3000/hello
    Hello World

## License

MIT
