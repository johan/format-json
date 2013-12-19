#! /usr/bin/env node

var fs   = require('fs')
  , json = require('./index')
  , args = process.argv.slice(2)
  , data = []
  , stdin = process.stdin
  , status
  ;

function log(raw) {
  try {
    console.log(json.diffy(JSON.parse(raw)));
  } catch(e) { return 1; }
  return 0;
}

if (args.length) {
  status = args.map(function(name) { log(fs.readFileSync(name, 'utf8')); });
  process.exit(status.reduce(function(a, b) { return a + b; }, 0));
}
else {
  stdin.resume();
  stdin.setEncoding('utf8')
  stdin.on('data', function(chunk) { data.push(chunk); })
  stdin.on('end', function() { process.exit(log(data.join(''))); });
}
