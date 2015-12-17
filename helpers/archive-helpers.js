var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  fs.readFile(path.join(__dirname, '../archives/sites.txt'), "utf-8", function(err, data){
    if(err){
      throw err;
    }
    var dataArray = data.split("\n")
    callback(dataArray);
  });
};

exports.isUrlInList = function(url) {
  var out = false//we think it should return a boolean, maybe not, but it makes sense
  var urlArray = exports.readListOfUrls();//we were hoping this would return an array of the sites
  console.log("BUTTS", urlArray)//checking to see if it did return array. it doesn't
  if(indexOf(urlArray, url) > -1){//had it returned an array, this would have been where we checked if the url was in there
    out = true
  }
  return out;
};

exports.addUrlToList = function() {
};

exports.isUrlArchived = function(url, callback) {
  //callback takes exists boolean
};

exports.downloadUrls = function() {
};
