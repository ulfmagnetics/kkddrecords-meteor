// Usage: node upload.js <namespace> <dirs...>
//
// for example:
// $ node upload.js kkddrecords /Users/jberry/Music/Blorb_Sync/

var AWS = require('aws-sdk'),
    fs = require('fs'),
    file = require('file');

AWS.config.loadFromPath('./private/aws.json')
var S3 = new AWS.S3();

var args = process.argv.slice(2);
if (args.length < 2) {
  console.log("Usage: node upload.js <namespace> <dirs...>")
  process.exit(1);
}

var namespace = args[0];

args.slice(1).forEach(function(dir) {
  file.walk(dir, function(start, dirs, files) {
    console.log("start: " + start);
    console.log("dirs: " + dirs);
    console.log("files: " + files);
  });
});

// - consider any filename matching /\.mp3$/
// - upload file to S3 bucket, namespaced by the app name
// - generate mongo record based on ID3 tag and S3 URL
