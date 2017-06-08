'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  errorHandler = require('./errors.server.controller'),
  Category = mongoose.model('Quiz'),
    _ = require('lodash');

var crud = require('./crud.server.controller')('Quiz', 'name');

module.exports = crud;