'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	validation = require('./validation.server.model');



/**
 * Quiz Schema
 */
var stats = ['list', 'of', 'valid', 'values'];

var QuizSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	question: {
		type: String,
		default: '',
		trim: true
	},
	name: {
		type: String,
		default: '',
		trim: true, 	
		unique : true,
		required: 'name cannot be blank',
		validate: [validation.len(15), 'name must be 15 chars in length or less']
	},
	effect: [{answer: String},{ stat: String, enum: stats},{increment: Number }]
});  

QuizSchema.virtual('stats').get(stats.slice); // slice the full array to get a safe copy.
mongoose.model('Quiz', QuizSchema);