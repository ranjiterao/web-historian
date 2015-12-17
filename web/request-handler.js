var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  
var body = '';
var statusCode = 200;
console.log("Serving request type " + req.method + " for url " + req.url);
if(req.method === 'GET'){
  if(req.url === "/" || req.url === undefined){
      res.writeHead(statusCode);
      fs.readFile(archive.paths.siteAssets + "/index.html", "utf-8", function(err, data){
        if(err){
          throw err;
        }
        res.writeHead(statusCode);
        //console.log((data).toString());
        res.end((data).toString());
      });
  } else if (archive.isUrlArchived(req.url)){
    //if true resond with site data
  }
}










  //res.end(archive.paths.list);
};
