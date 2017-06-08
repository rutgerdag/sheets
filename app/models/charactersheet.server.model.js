'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	validation = require('./validation.server.model');

/**
 * Charactersheet Schema
 */
var CharactersheetSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	description: {
		type: String,
		default: '',
		trim: true
	},
	name: {
		type: String,
		default: '',
		trim: true,
		required: 'name cannot be blank',
		validate: [validation.len(15), 'name must be 15 chars in length or less']
	},
	race: {
		type: String,
		default: '',
		trim: true
	},
	nationality: {
		type: String,
		default: '',
		trim: true
	},
	level: {
		type: Number,
		unique: false,
		trim: true
	},
	constitution: {
		type: Number,
		unique: false,
		trim: true
	},
	strength: {
		type: Number,
		unique: false,
		trim: true
	},
	dexterity: {
		type: Number,
		unique: false,
		trim: true
	},
	agility: {
		type: Number,
		unique: false,
		trim: true
	},
	talent: {
		type: Number,
		trim: true
	},
	intelligence: {
		type: Number,
		trim: true
	},
	judgement: {
		type: Number,
		trim: true
	},
	will: {
		type: Number,
		trim: true
	},
	zeal: {
		type: Number,
		trim: true
	},
	appearance: {
		type: Number,
		trim: true
	},
	charisma: {
		type: Number,
		trim: true
	},
	socialstanding: {
		type: Number,
		trim: true
	},
	consave: {
		type: Number,
		unique: false,
		trim: true
	},
	strsave: {
		type: Number,
		unique: false,
		trim: true
	},
	dexsave: {
		type: Number,
		unique: false,
		trim: true
	},
	agisave: {
		type: Number,
		unique: false,
		trim: true
	},
	talsave: {
		type: Number,
		trim: true
	},
	intsave: {
		type: Number,
		trim: true
	},
	judsave: {
		type: Number,
		trim: true
	},
	wilsave: {
		type: Number,
		trim: true
	},
	zeasave: {
		type: Number,
		trim: true
	},
	appsave: {
		type: Number,
		trim: true
	},
	chasave: {
		type: Number,
		trim: true
	},
	socsave: {
		type: Number,
		trim: true
	},
	height: {
		type: Number,
		trim: true
	},
	weight: {
		type: Number,
		trim: true
	},
	ar: {
		type: Number,
		trim: true
	},
	dr: {
		type: Number,
		trim: true
	},
	mr: {
		type: Number,
		trim: true
	},
	dc: {
		type: Number,
		trim: true
	},
	mi: {
		type: Number,
		trim: true
	},
	pi: {
		type: Number,
		trim: true
	},
	mpr: {
		type: Number,
		trim: true
	},
	ppr: {
		type: Number,
		trim: true
	},
	nsp: {
		type: Number,
		trim: true
	},
	lsp: {
		type: Number,
		trim: true
	},
	nsp_per_level: {
		type: Number,
		trim: true
	},
	lsp_per_level: {
		type: Number,
		trim: true
	},
	hp: {
		type: Number,
		trim: true
	},
	hp_per_level: {
		type: Number,
		trim: true
	},
	fp: {
		type: Number,
		trim: true
	},
	sc: {
		type: Number,
		trim: true
	},
	stattotal: {
		type: Number,
		trim: true,
		
	},
	pate_hp: {
		type: Number,
		trim: true
		
	},
	l_eye: {
		type: Number,
		trim: true
		
	},
	r_eye: {
		type: Number,
		trim: true
		
	},
	mouth_jaw: {
		type: Number,
		trim: true
		
	},
	neck: {
		type: Number,
		trim: true
		
	},
	throat: {
		type: Number,
		trim: true
		
	},
	l_hand: {
		type: Number,
		trim: true
		
	},
	lfa: {
		type: Number,
		trim: true
		
	},
	lua: {
		type: Number,
		trim: true
		
	},
	l_chest: {
		type: Number,
		trim: true
		
	},
	r_chest: {
		type: Number,
		trim: true
		
	},
	rua: {
		type: Number,
		trim: true
		
	},
	rfa: {
		type: Number,
		trim: true
		
	},
	r_hand: {
		type: Number,
		trim: true
		
	},
	abdomen: {
		type: Number,
		trim: true
		
	},
	groin: {
		type: Number,
		trim: true
		
	},
	l_thigh: {
		type: Number,
		trim: true
	},
	r_thigh: {
		type: Number,
		trim: true
		
	},
	l_calf: {
		type: Number,
		trim: true
		
	},
	r_calf: {
		type: Number,
		trim: true
		
	},
	l_foot: {
		type: Number,
		trim: true
	},
	r_foot: {
		type: Number,
		trim: true
	},
	purchasedlearnedskills: [{
		name: String,
		ec: Number,
		skill: String,
		skill_cost: Number,
		skill_group: String,
		level: Number
	}],
	purchasednativeskills: [{
		skill: String,
		skill_cost: Number,
		skill_group:String,
		level: Number
	}]
});

mongoose.model('Charactersheet', CharactersheetSchema);