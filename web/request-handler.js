var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
//var JsonDB = require('node-json-db');

// require more modules/folders here!

exports.handleRequest = function (req, res) {
console.log(archive.isUrlArchived(req.url, function(bool){return bool;}));
var body = '';

var statusCode = 200;

console.log("Serving request type " + req.method + " for url " + req.url);
if(req.method === 'GET'){
  archive.paths.archivedSites.concat(req.url);
  if(req.url === "/" || req.url === undefined){
      res.writeHead(statusCode);
      fs.readFile(archive.paths.siteAssets + "/index.html", "utf-8", function(err, data){
        if(err){
          throw err;
        }
        res.writeHead(statusCode);
        res.end((data).toString());
      });
  } else {
    console.log("INSIDE");
    archive.isUrlArchived(req.url, function(bool){
      console.log("BOOL:", bool)
      if(bool){
        fs.readFile(archive.paths.archivedSites.concat(req.url), function(err, data){
          if(err){
            throw err;
          }
          console.log("DATA DATA DATA", data)
          body += data;
          res.writeHead(statusCode);
          res.end((body).toString());
        });
      } else {
        statusCode = 404;
        res.writeHead(statusCode);
        res.end();
      }
    });




    
    }
}










  //res.end(archive.paths.list);
};
