'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  errorHandler = require('./errors.server.controller'),
  Charactersheet = mongoose.model('Charactersheet'),
    _ = require('lodash');

var crud = require('./crud.server.controller')('Charactersheet', 'name');

module.exports = crud;