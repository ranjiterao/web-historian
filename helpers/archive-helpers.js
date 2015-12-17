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
 
exports.isUrlInList = function(url, callback) {
  var out = false;

  fs.readFile(path.join(__dirname, '../archives/sites.txt'), "utf-8", function(err, data){
    if(err){
      throw err;
    }

  var dataArray = data.split('\n');

  _.each(dataArray, function(dataURL) {
    if (url === dataURL) {
      out = true;
    }
  });
  callback(out);
});

};

exports.addUrlToList = function(url, callback) {
  fs.readFile(path.join(__dirname, '../archives/sites.txt'), "utf-8", function(err, data){
    if(err){
      throw err;
    }

  var dataArray = data.split('\n');

  dataArray[dataArray.length] = url;

  fs.writeFile(path.join(__dirname, '../archives/sites.txt'), "utf-8", dataArray.join("\n"));
  });
  callback(dataArray);
};

exports.isUrlArchived = function(url, callback) {
  //callback takes exists boolean
};

exports.downloadUrls = function() {
};
