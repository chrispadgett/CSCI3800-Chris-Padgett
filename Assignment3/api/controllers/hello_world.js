'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 http://www.w3schools.com/js/js_strict.asp
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.

  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
var util = require('util');

/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.

 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
module.exports = {
  hello: hello,
  oauth: oauth,
  basic: basic
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function hello(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);

  // this sends back a JSON response which is a single string
  res.json(hello);
}

function oauth(req, res) {
	var responseString = { message: "" };
	var GitHubApi = require("github");

    var github = new GitHubApi({
        // required
        version: "3.0.0"
    });

    var token = req.swagger.params.githuboauthtoken.value;
    github.authenticate({
        type: "oauth",
        token: token
    });

    github.user.get({ user: req.swagger.params.githubuser.value} , function(gerr, gres) {
        console.log("GOT ERR?", gerr);
        console.log("GOT RES?", gres);

		if(!gerr)
		{
			responseString.message = util.format("Username:%s Id:%s", gres.login, gres.id);
		}
		else
		{
			responseString.message = util.format('Error: %s', gerr);
		}
		
		res.json(responseString.message);
    });
}

function basic(req, res) {
	var responseString = { message: "" };
	var GitHubApi = require("github");

    var github = new GitHubApi({
        // required
        version: "3.0.0"
    });

    github.authenticate({
        type: "basic",
        username: req.swagger.params.githubuser.value,
        password: req.swagger.params.githubuserpassword.value
    });

    github.user.get({ user: req.swagger.params.githubuser.value} , function(gerr, gres) {
        console.log("GOT ERR?", gerr);
        console.log("GOT RES?", gres);

		if(!gerr)
		{
			responseString.message = util.format("Username:%s Id:%s", gres.login, gres.id);
		}
		else
		{
			responseString.message = util.format('Error: %s', gerr);
		}
		
		res.json(responseString.message);
    });  
}