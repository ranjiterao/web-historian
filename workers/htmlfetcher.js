// Use the code in `archive-helpers.js` to actually download the urls
// that are waiting.
var archive = require('../helpers/archive-helpers');
var JsonDB = require('node-json-db');
var db = new JsonDB("database", true, false)

var fetch = function(){
  archive.readListOfUrls(function(urlArray){//calls callback on urlArray = an array of the list of sites eg ["www.google.com", "www.askjeeves.com"]
    _.each(urlArray, function(url){//iterates through each url in array
      // archive.isUrlInList(url, function(listed){//we don't need to do this because if we read it on the list or urls, why would we need to check if it's in the same list
        // if(!listed){
          archive.isUrlArchived(url, function(archived){//check if we have archived the url, return a callback that takes the bool val of "is this in the archive?"
            if(!archived){//if we have not archived it yet
              request('http://'+ url, function(err, res, html){//get request that url, get back a function called on an error message, a response, and the html of the url
                db.sites.save({name: url, html: html});//create db with a sites object and insert into the sites object another object containing the now scraped sites url and html
                //^note^: utorial has an isScraped key set to true
                fs.writeFile(archive.paths.archivedSites, html, function(err, res, html) {//take the html from the site and put it into the archive
                  if (err) {//throw an error if this doesn't work for some reason
                    throw err
                  }
                });
              });
            }
          });
        // }
      // });
    });
  });
};