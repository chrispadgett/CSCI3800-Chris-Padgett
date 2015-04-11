'use strict';

var util = require('util');
var usergrid = require('usergrid');

module.exports = {
  getAllMovies: getAllMovies,
  getMovies: getMovies,
  postMovies: postMovies,
  deleteMovies: deleteMovies
};

function getAllMovies(req, res) {
	var dataClient = new usergrid.client({
		orgName:'cpadgett',
		appName:'Sandbox'
	});
	
	var options = {
		endpoint:'movies'
	};

	dataClient.request(options, function (error, response) {
		res.json(response);
	});
}

function getMovies(req, res) {
	var idParam = req.swagger.params.id.value;

	var dataClient = new usergrid.client({
		orgName:'cpadgett',
		appName:'Sandbox'
	});
	
	var options = {
		endpoint:'movies',
		qs:{ql:"select * where id='" + idParam + "'"}
	};

	//Call request to initiate the API call
	dataClient.request(options, function (error, response) {
		res.json(response);
	});
}

function postMovies(req, res) {
	var idParam = req.swagger.params.id.value;
	var titleParam = req.swagger.params.title.value;
	var yearParam = req.swagger.params.year.value;
	var actor1Param = req.swagger.params.actor1.value;
	var actor2Param = req.swagger.params.actor2.value;
	var actor3Param = req.swagger.params.actor3.value;
  
	var dataClient = new usergrid.client({
		orgName:'cpadgett',
		appName:'Sandbox'
	});
	
	var optionsPUT = {
		method:'PUT',
		endpoint:'movies',
		qs:{ql:"select * where id='" + idParam + "'"},
		body:{id:idParam, title:titleParam, year:yearParam, actors:[actor1Param,actor2Param,actor3Param]}
	};
	
	var optionsPOST = {
		method:'POST',
		endpoint:'movies',
		qs:{ql:"select * where id='" + idParam + "'"},
		body:{id:idParam, title:titleParam, year:yearParam, actors:[actor1Param,actor2Param,actor3Param]}
	};

	// try to edit entries first
	dataClient.request(optionsPUT, function (error, responsePUT) {
		if (error){
			// if we error on edit, then post instead
			dataClient.request(optionsPOST, function (error, responsePOST) {
				res.json(responsePOST);
			});
		} else {
			res.json(responsePUT);
		}
	});
}

function deleteMovies(req, res) {
	var idParam = req.swagger.params.id.value;

	var dataClient = new usergrid.client({
		orgName:'cpadgett',
		appName:'Sandbox'
	});
	
	var options = {
		method:'DELETE',
		endpoint:'movies/',
		qs:{ql:"select * where id='" + idParam + "'"}
	};

	dataClient.request(options, function (error, response) {
		res.json(response);
	});
}