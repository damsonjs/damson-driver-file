'use strict';

var Promise = require('promise');
var fs = require('fs');
var write = Promise.denodeify(fs.writeFile);

/**
 * Writes object to File
 * @param {object} object Some output to File
 */
function send(object) {
  if (typeof object === 'object') {
    return write(this.filepath, JSON.stringify(object, null, '  '));
  } else {
    return write(this.filepath, object.toString());
  }
}

/**
 * Sets path of file.
 * @param {string} filepath
 */
function setFilePath(filepath) {
  this.filepath = filepath;
}

function DriverFile(options) {
  this.filepath = options.filepath || '';
}

DriverFile.prototype.send = send;
DriverFile.prototype.setFilePath = setFilePath;

module.exports = DriverFile;