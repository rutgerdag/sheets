'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
    _ = require('lodash');

module.exports = function(modelName, sortBy) {

	var Model = mongoose.model(modelName);

	return {
		create: function(req, res) {
			console.info("crud-create");
			var model = new Model(req.body);

			model.save(function(err) {
				if (err) {
					return res.status(400).send({
						message: errorHandler.getErrorMessage(err)
					});
				} else {
					res.status(201).json(model);
				}
			});
		},
		read: function(req, res) {
			res.json(req.modelName);
		},
		update: function(req, res) {
			console.info("crud-update");
			var model = req.modelName;

			model = _.extend(model, req.body);

			model.save(function(err) {
				if (err) {
					return res.status(400).send({
						message: errorHandler.getErrorMessage(err)
					});
				} else {
					res.json(model);
				}
			});
		},
		delete: function(req, res) {
			console.info("crud-delete");
			var model = req.modelName;

			model.remove(function(err) {
				if (err) {
					return res.status(400).send({
						message: errorHandler.getErrorMessage(err)
					});
				} else {
					res.json(model);
				}
			});
		},
		list: function(req, res) {
			
			console.info("crud-list");
			var query = {};
			console.info(req.query);
			if (req.query.filter) {
				// TODO: extend this to handle multiple filters
				query = req.query.filter;
			}

			console.info(query);
			Model.find(query).sort(sortBy).exec(function(err, models) {
				if (err) {
					return res.status(400).send({
						message: errorHandler.getErrorMessage(err)
					});
				} else {
					res.json(models);
				}
			});
		},
		getByID: function(req, res, next, id) {
			console.info("crud-getByID");
			if (!mongoose.Types.ObjectId.isValid(id)) {
				return res.status(400).send({
					message: modelName + ' is invalid'
				});
			}

			Model.findById(id).exec(function(err, model) {
				
			console.info("crud-findByID");
				if (err) return next(err);
				if (!model) {
					return res.status(404).send({
		  				message: modelName + ' not found'
		  			});
				}
				
				req.modelName = model;
				next();
			});
		}
	};
};